import './styles.css';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { createCategories, updateCategories, deleteCategories } from '../../api/categoriesApi';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';
import CategoryHierarchy from './components/CategoryHierarchy';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
import ConfirmDeleteModal from '../../components/UI/ConfirmDeleteModal';

export default function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);

  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);

  const { categoryState, categoryDispatch } = useCategories();

  const createCategory = (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('name', categoryName);
    form.append('parentId', parentCategoryId);
    form.append('categoryImage', categoryImage);

    createCategories(form, categoryDispatch);

    handleCloseModal();
  };

  const createCategoriesList = (categories, options = []) => {
    categories.map((category) => {
      options.push({
        name: category.name,
        value: category.id,
        parentId: category.parentId,
      });

      if (category.children.length > 0) {
        createCategoriesList(category.children, options);
      }
    });

    return options;
  };
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleCloseModal = () => {
    setParentCategoryId('');
    setCategoryImage('');
    setCategoryName('');
    setIsModalOpen(false);
  };

  const updateCheckedAndExpandedCategories = () => {
    const categories = createCategoriesList(categoryState.categories);

    const checkedArray = [];
    const expandedArray = [];

    checked.length > 0 &&
      checked.forEach((categoryId) => {
        const category = categories.find(
          (category) => categoryId == category.value,
        );
        category && checkedArray.push(category);
      });

    expanded.length > 0 &&
      expanded.forEach((categoryId) => {
        const category = categories.find(
          (category) => categoryId == category.value,
        );
        category && expandedArray.push(category);
      });

    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
  };

  const updateCategory = () => {
    setUpdateCategoryModal(true);
    updateCheckedAndExpandedCategories();
  };

  const handleCategoryInput = (key, value, index, type) => {
    if (type == 'checked') {
      const updatedCheckedArray = checkedArray.map((item, _index) => {
        return index == _index ? { ...item, [key]: value } : item;
      });

      setCheckedArray(updatedCheckedArray);
    } else if (type == 'expanded') {
      const updatedExpandedArray = expandedArray.map((item, _index) => {
        return index == _index ? { ...item, [key]: value } : item;
      });

      setExpandedArray(updatedExpandedArray);
    }
  };

  const renderCreateCategoriesModal = () => (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title="Adicionar uma nova categoria"
    >
      <div className="input-container-category-add">
        <input
          onChange={(e) => setCategoryName(e.target.value)}
          type="text"
          className="input-category"
          placeholder="Nome da categoria"
        />

        <select onChange={(e) => setParentCategoryId(e.target.value)}>
          <option value="">Selecione uma categoria</option>

          {createCategoriesList(categoryState.categories).map((category) => (
            <option key={category.value} value={category.value}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        />
      </div>

      <div className="btn-save-container-modal-category">
        <Button onClick={createCategory}>Salvar</Button>
      </div>
    </Modal>
  );

  const updateCategoriesForm = (e) => {
    e.preventDefault();

    const form = new FormData();

    expandedArray.forEach((item, index) => {
      form.append('id', item.value);
      form.append('name', item.name);
      form.append('parentId', item.parentId ? item.parentId : '');
    });

    checkedArray.forEach((item, index) => {
      form.append('id', item.value);
      form.append('name', item.name);
      form.append('parentId', item.parentId ? item.parentId : '');
    });

    updateCategories(form, categoryDispatch);

    setUpdateCategoryModal(false);
  };

  const renderUpdateCategoriesModal = () => (
    <Modal
      title="Editar Categorias"
      width="1000px"
      isOpen={updateCategoryModal}
      onClose={() => setUpdateCategoryModal(false)}
    >
      <div className="inputs-categories-modal">
        <span>Expandidas</span>

        {expandedArray.length > 0 &&
          expandedArray.map((category, index) => (
            <div key={index} className="rows-categories-modal">
              <Input
                placeholder="Nome da categoria"
                type="text"
                value={category.name}
                onChange={(e) =>
                  handleCategoryInput('name', e.target.value, index, 'expanded')
                }
              />

              <Select
                placeholder="Selecionar categoria"
                options={createCategoriesList(categoryState.categories)}
                onChange={(e) =>
                  handleCategoryInput('parentId', e.value, index, 'expanded')
                }
              />
            </div>
          ))}

        <span>Categorias selecionadas</span>

        {checkedArray.length > 0 &&
          checkedArray.map((category, index) => (
            <div key={index} className="rows-categories-modal">
              <Input
                placeholder="Nome da categoria"
                type="text"
                value={category.name}
                onChange={(e) =>
                  handleCategoryInput('name', e.target.value, index, 'checked')
                }
              />

              <Select
                placeholder="Selecionar categoria"
                options={createCategoriesList(categoryState.categories)}
                onChange={(e) =>
                  handleCategoryInput('parentId', e.value, index, 'checked')
                }
              />
            </div>
          ))}
      </div>

      <div className="btn-save-container-modal-category">
        <Button onClick={updateCategoriesForm}>Salvar</Button>
      </div>
    </Modal>
  );

  const deleteCategory = () => {
    setDeleteCategoryModal(true);
    updateCheckedAndExpandedCategories();
  };

  const confirmDeleteCategory = () => {
    const checkedIdsArray = checkedArray.map((item) => ({ id: item.value }));
    const expandedIdsArray = expandedArray.map((item) => ({ id: item.value }));
    const idsArray = expandedIdsArray.concat(checkedIdsArray);
    deleteCategories(idsArray, categoryDispatch)

    console.log(checkedIdsArray);
    console.log(expandedIdsArray);
    console.log(idsArray);

    setDeleteCategoryModal(false);
  };

  return (
    <Layout sidebar={true}>
      <div className="categories-container">
        <div className="title-category-and-add-button">
          <h1>Categorias</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add</Button>
        </div>

        <CategoryHierarchy
          categories={categoryState.categories}
          handleClikEdit={updateCategory}
          handleClickDelete={deleteCategory}
          checked={checked}
          setChecked={setChecked}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </div>

      {renderCreateCategoriesModal()}
      {renderUpdateCategoriesModal()}

      <ConfirmDeleteModal
        isOpen={deleteCategoryModal}
        handleConfirm={confirmDeleteCategory}
        handleCancel={() => setDeleteCategoryModal(false)}
        style={{ alignItems: 'start' }}
      >
        <h3 className="confirm-cancel-delete-title-list">Expandidas:</h3>

        {expandedArray.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}

        <h3 className="confirm-cancel-delete-title-list">Selecionadas:</h3>

        {checkedArray.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </ConfirmDeleteModal>
    </Layout>
  );
}
