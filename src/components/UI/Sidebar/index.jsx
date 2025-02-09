import './styles.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Produdos</Link></li>
        <li><Link to='/orders'>Vendas</Link></li>
        <li><Link to='/categories'>Categorias</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;