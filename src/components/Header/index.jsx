import './styles.css';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='headerContainer'>
        <Link to='/' className='link-brand'>Admin Dashboard</Link>
        <div className='signin-out-button'>
          <Link to='/signin' className='link'>Signin</Link>
          <Link to='/signup' className='link'>Signup</Link>
        </div>
    </div>
  )
}
