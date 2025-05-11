import './styles.css';
import Layout from '../../components/Layout';

export default function Home() {
  return (
    <Layout sidebar={true}>
      <div className="home-container">
        <div className="title-content">
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            dignissimos quis eum ducimus commodi exercitationem accusamus nemo
            vero assumenda sequi, dicta autem, ex, minima blanditiis
            perspiciatis! Fuga ea labore ullam.
          </p>
        </div>
      </div>
    </Layout>
  );
}
