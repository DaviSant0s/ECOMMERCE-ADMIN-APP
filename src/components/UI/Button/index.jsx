import { Children } from 'react';
import './styles.css';

const Button = ({ children, onClick, style = {} }) => {
  return (
    <button style={style} className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
