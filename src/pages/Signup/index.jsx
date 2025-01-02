import Layout from '../../components/Layout';
import ButtonForm from '../../components/UI/ButtonForm';
import Input from '../../components/UI/Input';
import './styles.css';

export default function Signup() {
  return (
    <Layout>
      <div className="form-container-signup">
        <form>
          <div className='name-input-group'>
            <Input value='' onChange={() => {}} htmlFor={'first-name'} label={'Nome'} type={'text'} id={'first-name'} placeholder={'Nome'}/>
            <Input value='' onChange={() => {}} htmlFor={'last-name'} label={'Sobrenome'} type={'text'} id={'last-name'} placeholder={'Sobrenome'}/>
          </div>
          <Input value='' onChange={() => {}} htmlFor={'email'} label={'Email'} type={'email'} id={'email'} placeholder={'Email'}/>
          <Input value='' onChange={() => {}} htmlFor={'password'} label={'Senha'} type={'password'} id={'password'} placeholder={'Senha'}/>

          <ButtonForm>
              Enviar
          </ButtonForm>

        </form>
      </div>
    </Layout>
  )
}
