import './styles.css';
import Layout from '../../components/Layout'
import { useEffect } from 'react';
import { getAllCategories } from '../../api/categoriesApi';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';

export default function Categories() {

  const { categoryState, categoryDispatch } = useCategories();

  useEffect(() => {
    getAllCategories(categoryDispatch);
  }, []);

  const renderCategories = (categories) => {

    return categories.map(category => (
      <li key={category.name}>
        {category.name}
        {category.children.length > 0 && <ul>{renderCategories(category.children)}</ul>}
      </li>
    ));

  }

  return (
    <Layout sidebar={true}>

      <div className='categories-container'>

        <h1>Categorias</h1>
        <ul>{renderCategories(categoryState.categories)}</ul>

      </div>


    </Layout>
  )
}