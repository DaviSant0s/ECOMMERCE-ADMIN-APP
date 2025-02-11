import './styles.css';
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react';
import { createCategories, getAllCategories } from '../../api/categoriesApi';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';

export default function Categories() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  const { categoryState, categoryDispatch } = useCategories();

  useEffect(() => {
    getAllCategories(categoryDispatch);
  }, []);

  const createCategory = (e) => {
    
      e.preventDefault();

      const form = new FormData();

      form.append("name", categoryName);
      form.append("parentId", parentCategoryId);
      form.append("categoryImage", categoryImage);
  
      createCategories(form, categoryDispatch);

      setIsModalOpen(false);
  }

  const renderCategories = (categories) => {

    return categories.map(category => (
      <li key={category.name}>
        {category.name}
        {category.children.length > 0 && <ul>{renderCategories(category.children)}</ul>}
      </li>
    ));

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

  return (
    <Layout sidebar={true}>

      <div className='categories-container'>

        <div className='title-category-and-add-button'>
          <h1>Categorias</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Add
          </Button>
        </div>

        <ul>{renderCategories(categoryState.categories)}</ul>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

        <h2>Adicionar uma nova categoria</h2>
                
        <div className="input-container-category-add">

            <input onChange={e => setCategoryName(e.target.value)} type="text" className='input-category' placeholder='Nome da categoria'/>

            <select onChange={e => setParentCategoryId(e.target.value)}>
              <option value="">Selecione uma categoria</option>

              {
              
                createCategoriesList(categoryState.categories).map(category => (
                  <option key={category.value} value={category.value}>{category.name}</option>
                ))
              
              }
 
            </select>

            <input type="file" name="categoryImage" onChange={handleCategoryImage} />

        </div>

        <div className='btn-save-container-modal-category'>

          <Button onClick={createCategory}>
              Salvar
          </Button>

        </div>


      </Modal>

    </Layout>
  )
}