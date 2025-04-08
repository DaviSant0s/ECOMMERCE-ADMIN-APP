import './styles.css';
import Layout from '../../components/Layout'
import { useState } from 'react';
import { createCategories } from '../../api/categoriesApi';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';
import CategoryHierarchy from './components/CategoryHierarchy';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';

export default function Categories() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);

  
  const { categoryState, categoryDispatch } = useCategories();
  console.log(categoryState)
  

  const createCategory = (e) => {
    
      e.preventDefault();

      const form = new FormData();

      form.append("name", categoryName);
      form.append("parentId", parentCategoryId);
      form.append("categoryImage", categoryImage);
  
      createCategories(form, categoryDispatch);

      handleCloseModal();
  }

  const createCategoriesList = (categories, options = []) => {

    categories.map(category => {

        options.push(
          {name: category.name, value: category.id}
        );

        if (category.children.length > 0){
          createCategoriesList(category.children, options)
        }

    });

    return options;

  }
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  }

  const handleCloseModal = () => {
    setParentCategoryId('');
    setCategoryImage('');
    setCategoryName('');
    setIsModalOpen(false);
  }

  const updateCategory = () => {
    setUpdateCategoryModal(true);
  }

  return (
    <Layout sidebar={true}>

      <div className='categories-container'>

        <div className='title-category-and-add-button'>
          <h1>Categorias</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Add
          </Button>
        </div>

        <CategoryHierarchy categories={categoryState.categories} handleClikEdit={updateCategory}/>

      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title='Adicionar uma nova categoria'>
                
        <div className="input-container-category-add">

            <input onChange={e => setCategoryName(e.target.value)} type="text" className='input-category' placeholder='Nome da categoria'/>

            <select onChange={e => setParentCategoryId(e.target.value)}>
              <option value="">Selecione uma categoria</option>

              {createCategoriesList(categoryState.categories).map(category => (
                  <option key={category.value} value={category.value}>{category.name}</option>
              ))}
 
            </select>

            <input type="file" name="categoryImage" onChange={handleCategoryImage} />

        </div>

        <div className='btn-save-container-modal-category'>

          <Button onClick={createCategory}>
              Salvar
          </Button>

        </div>

 
      </Modal>

      {/** Edit category */}
      <Modal 
        title='Editar Categorias'
        width='1000px'
        isOpen={updateCategoryModal} 
        onClose={() => setUpdateCategoryModal(false)}
      >

        <div className='expanded-categories-modal'>
          <Input placeholder='Nome da categoria' type='select'/>
          <Select placeholder='Selecionar categoria' options={createCategoriesList(categoryState.categories)}/>
        </div>


      </Modal>

    </Layout>
  )
}