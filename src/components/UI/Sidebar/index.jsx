import './styles.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/products">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/orders">
            Vendas
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/categories">
            Categorias
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
