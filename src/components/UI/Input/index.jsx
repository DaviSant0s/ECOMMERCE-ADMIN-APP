import './styles.css';

export default function Input({ htmlFor, label, type, id, placeholder, errorMessage, value, onChange }) {
  return (
    <div className='inputContainer'>
        <label htmlFor={htmlFor}>{label}</label>
        <input type={type} value={value} id={id} onChange={onChange} placeholder={placeholder} />

        { errorMessage && 
            <small>{errorMessage}</small>
        }
    </div>
  )
}
