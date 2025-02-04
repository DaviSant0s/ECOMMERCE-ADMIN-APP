import Header from '../Header';
import './styles.css';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
      <Header/>
      {children}  
    </div>
  )
}
