import Layout from '../../components/Layout';
import ButtonForm from '../../components/UI/ButtonForm';
import Input from '../../components/UI/Input';
import './styles.css';

export default function Signin() {
  return (
      <Layout>
        <div className="form-container-signin">
          <form>
           <Input value='' onChange={() => {}} htmlFor={'email'} label={'Email'} type={'email'} id={'email'} placeholder={'Email'} errorMessage={"Nunca compartilharemos seu e-mail com mais ninguém."}/>
           <Input value='' onChange={() => {}} htmlFor={'password'} label={'Senha'} type={'password'} id={'password'} placeholder={'Senha'}/>

            <div className="form-check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Check me out</label>
            </div>

            <ButtonForm>
              Enviar
            </ButtonForm>

          </form>
        </div>
      </Layout>
  )
}
