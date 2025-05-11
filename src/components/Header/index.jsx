import { signout } from '../../api/authApi';
import { useAuth } from '../../context/authContext/authProvider';
import { useCategories } from '../../context/categoriesContext/categoriesProvider';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const { state, dispatch } = useAuth();
  //const { categoryState } = useCategories();

  //console.log(categoryState)

  const Logout = () => {
    signout(dispatch);
  };

  return (
    <div className="headerContainer">
      <Link to="/" className="link-brand">
        Admin Dashboard
      </Link>
      <div className="signin-out-button">
        <div className="signin-signup-btn-container">
          {!state.authenticate && (
            <Link to="/signin" className="link">
              Signin
            </Link>
          )}

          {!state.authenticate && (
            <Link to="/signup" className="link">
              Signup
            </Link>
          )}
        </div>

        {state.authenticate && (
          <Link to="/signin" className="signout-btn" onClick={Logout}>
            Signout
          </Link>
        )}
      </div>
    </div>
  );
}
