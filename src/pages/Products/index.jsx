import './styles.css';
import Layout from '../../components/Layout'
import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';
import { useProducts } from '../../context/productsContext/productsProvider';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/categoriesApi';
import { createProducts } from '../../api/productsApi';

export default function Products() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [productName, setproductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  
  const { productState, productDispatch } = useProducts();
  const { categoryState, categoryDispatch } = useCategories();
  
  console.log(productPictures)
  
  useEffect(() => {
    getAllCategories(categoryDispatch);
  }, []);


  const createProduct = (e) => {

    e.preventDefault();

    const form = new FormData();

    form.append('name', productName);
    form.append('quantity', productQuantity);
    form.append('price', productPrice);
    form.append('description', productDescription);
    form.append('category', categoryId);
    
    for (let picture of productPictures) {
      form.append('productPicture', picture);
    }

    createProducts(form, productDispatch);

    setIsModalOpen(false);

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

  const handleProductPicture = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ]);
  }

  return (
    <Layout sidebar={true}>

      <div className='product-container'>

        <div className='title-product-and-add-button'>
          <h1>Produtos</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Add
          </Button>
        </div>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

        <h2>Adicionar uma novo produto</h2>

        <div className="input-container-product-add">

          <input onChange={e => setproductName(e.target.value)} type="text" className='input-product' placeholder='Nome do produto' />
          <input onChange={e => setProductQuantity(e.target.value)} type="text" className='input-product' placeholder='Quantidade' />
          <input onChange={e => setProductPrice(e.target.value)} type="text" className='input-product' placeholder='Preço' />
          <input onChange={e => setProductDescription(e.target.value)} type="text" className='input-product' placeholder='Descrição' />

          <select onChange={e => setCategoryId(e.target.value)}>
            <option value="">Selecione a categoria</option>

            {createCategoriesList(categoryState.categories).map(category => (
              <option key={category.value} value={category.value}>{category.name}</option>
            ))}

          </select>

            {productPictures.length > 0 && productPictures.map((picture, index) => (
              <p key={index}>{picture.name}</p>
            ))}

          <input type="file" name="productPicture" onChange={handleProductPicture} />

        </div>

        <div className='btn-save-container-modal-product'>

          <Button onClick={createProduct}>
            Salvar
          </Button>

        </div>


      </Modal>

    </Layout>
  )
}
