import './styles.css';
import ReactSelect from 'react-select';

export default function Select({ onChange, placeholder, options = [] }) {
  return (
    <div className="selectContainer">
      <ReactSelect
        options={[
          { value: '', label: 'Nenhum valor' },
          ...options.map((option) => ({ value: option.value, label: option.name })),
        ]}
        onChange={onChange}
        className="reactSelect"
        placeholder={placeholder}
      />
    </div>
  );
}

{
  /*{label && <label htmlFor={id}>{label}</label>}

<select id={id} name={id} onChange={onChange}>
  <option value="">{placeholder}</option>
  {options.map(option => (
      <option 
          key={option.value} 
          value={option.value}
      >
          {option.name}

      </option>
  ))}

  </select>*/
}
