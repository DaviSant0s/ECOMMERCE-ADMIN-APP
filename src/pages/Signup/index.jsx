import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ButtonForm from '../../components/UI/ButtonForm';
import Input from '../../components/UI/Input';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext/authProvider';
import { signup } from '../../api/authApi';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const userSignup = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
      firstName,
      lastName,
    };

    signup(userCredentials, dispatch);

    navigate('/signin');
  };

  useEffect(() => {
    if (state.authenticate) {
      navigate('/');
    }
  });

  if (state.loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="form-container-signup">
        <form onSubmit={userSignup}>
          <div className="name-input-group">
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              htmlFor={'first-name'}
              label={'Nome'}
              type={'text'}
              id={'first-name'}
              placeholder={'Nome'}
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              htmlFor={'last-name'}
              label={'Sobrenome'}
              type={'text'}
              id={'last-name'}
              placeholder={'Sobrenome'}
            />
          </div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            htmlFor={'email'}
            label={'Email'}
            type={'email'}
            id={'email'}
            placeholder={'Email'}
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

          <ButtonForm>Enviar</ButtonForm>
        </form>
      </div>
    </Layout>
  );
}
