import './styles.css';
import Layout from '../../components/Layout'
import { useState } from 'react';
import { createCategories } from '../../api/categoriesApi';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoIosCheckbox, IoIosCheckboxOutline, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function Categories() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);

  console.log(parentCategoryId)

  const { categoryState, categoryDispatch } = useCategories();
  

  const createCategory = (e) => {
    
      e.preventDefault();

      const form = new FormData();

      form.append("name", categoryName);
      form.append("parentId", parentCategoryId);
      form.append("categoryImage", categoryImage);
  
      createCategories(form, categoryDispatch);

      handleCloseModal();
  }

  const renderCategories = (categories) => {

    return categories.map(category => (
      {
        label: category.name,
        value: category.id,
        children: category.children.length > 0 && renderCategories(category.children)
      }
        
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

  const handleCloseModal = () => {
    setParentCategoryId('');
    setCategoryImage('');
    setCategoryName('');
    setIsModalOpen(false);
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

        <CheckboxTree
            nodes={renderCategories(categoryState.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={checked => setChecked(checked)}
            onExpand={expanded => setExpanded(expanded)}
            icons={{
              check: <IoIosCheckbox/>,
              uncheck: <IoIosCheckboxOutline/>,
              halfCheck: <IoIosCheckboxOutline/>,
              expandClose: <IoIosArrowForward/>,
              expandOpen: <IoIosArrowDown/>
            }}
        />

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

    </Layout>
  )
}