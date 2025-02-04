import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ButtonForm from '../../components/UI/ButtonForm';
import Input from '../../components/UI/Input';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext/authProvider';

export default function Signup() {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.authenticate){
      navigate('/');
    }
  })

  return (
    <Layout>
      <div className="form-container-signup">
        <form>
          <div className='name-input-group'>
            <Input value={firstName} onChange={e => setFirstName(e.target.value)} htmlFor={'first-name'} label={'Nome'} type={'text'} id={'first-name'} placeholder={'Nome'}/>
            <Input value={lastName} onChange={e => setLastName(e.target.value)} htmlFor={'last-name'} label={'Sobrenome'} type={'text'} id={'last-name'} placeholder={'Sobrenome'}/>
          </div>
          <Input value={email} onChange={e => setEmail(e.target.value)} htmlFor={'email'} label={'Email'} type={'email'} id={'email'} placeholder={'Email'}/>
          <Input value={password} onChange={e => setPassword(e.target.value)} htmlFor={'password'} label={'Senha'} type={'password'} id={'password'} placeholder={'Senha'}/>

          <ButtonForm>
              Enviar
          </ButtonForm>

        </form>
      </div>
    </Layout>
  )
}
