import './styles.css';
import Layout from '../../components/Layout'
import Sidebar from '../../components/UI/Sidebar';

export default function Home() {
  return (
      <Layout>
        <div className='home-container'>
          <Sidebar/>
          <div className='home-content'>
            <div className='title-content'>
              <h1>Welcome to Admin Dashboard</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dignissimos quis eum ducimus commodi exercitationem accusamus nemo vero assumenda sequi, dicta autem, ex, minima blanditiis perspiciatis! Fuga ea labore ullam.</p>
            </div>
          </div>
        </div>
      </Layout>
  )
}