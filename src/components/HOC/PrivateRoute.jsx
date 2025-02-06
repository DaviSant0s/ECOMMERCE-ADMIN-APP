import { useEffect } from "react";
import { useNavigate,  } from "react-router-dom";

export default function PrivateRoute({element: Component}) {
  
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');

    useEffect(() => {

      if(!token) navigate('/signin');

    }, [token, navigate]);

    if(!token) return null;

  return <Component/>;

}
