import { useAuth } from '../../context/authContext/authProvider';
import './styles.css';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { state, dispatch } = useAuth();
  console.log(state.authenticate)

  return (
    <div className='headerContainer'>
        <Link to='/' className='link-brand'>Admin Dashboard</Link>
        <div className='signin-out-button'>

          {!state.authenticate &&
            <Link to='/signin' className='link'>Signin</Link>
          }

          {!state.authenticate &&
            <Link to='/signup' className='link'>Signup</Link>
          }

          
          {state.authenticate &&
            <span className='signout-btn'>Signout</span>
          }

          
        </div>
    </div>
  )
}
