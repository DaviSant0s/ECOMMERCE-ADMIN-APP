import './styles.css';

export default function ButtonForm({ type, children }) {
  return (
    <button type={type} className="buttonForm-btn-container">
      {children}
    </button>
  );
}
