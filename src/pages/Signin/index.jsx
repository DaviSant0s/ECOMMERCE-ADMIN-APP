import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ButtonForm from '../../components/UI/ButtonForm';
import Input from '../../components/UI/Input';
import { useAuth } from '../../context/authContext/authProvider';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authApi';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    login(userCredentials, dispatch);

    navigate('/');
  };

  useEffect(() => {
    if (state.authenticate) {
      navigate('/');
    }
  });

  return (
    <Layout>
      <div className="form-container-signin">
        <form onSubmit={userLogin}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            htmlFor={'email'}
            label={'Email'}
            type={'email'}
            id={'email'}
            placeholder={'Email'}
            errorMessage={'Nunca compartilharemos seu e-mail com mais ninguém.'}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            htmlFor={'password'}
            label={'Senha'}
            type={'password'}
            id={'password'}
            placeholder={'Senha'}
          />

          <div className="form-check">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Check me out</label>
          </div>

          <ButtonForm>Enviar</ButtonForm>
        </form>
      </div>
    </Layout>
  );
}
