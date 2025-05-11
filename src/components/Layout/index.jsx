import Header from '../Header';
import Sidebar from '../UI/Sidebar';
import './styles.css';

export default function Layout({ children, sidebar = false }) {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        {sidebar && <Sidebar />}

        {children}
      </div>
    </div>
  );
}
