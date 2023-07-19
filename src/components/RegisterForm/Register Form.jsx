import { useDispatch } from 'react-redux';
import { register } from 'redux/Authorization/operation';
import { 
  PiAtBold,
  PiPasswordFill,
  PiUserBold,
  PiCheckFatFill
} from "react-icons/pi";
import { RegisterContainer } from './RegisterForm.styled';
import { 
  LoginTitle,
  FormLogin,
  ContainerInput,
  InputFilter,
  LoginBtn
} from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer>
      <LoginTitle>Registration</LoginTitle>
      <FormLogin onSubmit={handleSubmit}>
        <ContainerInput>
        <PiUserBold size={30} style={{ color: '#113f67', marginRight: '10px' }} />
          <InputFilter
            type="text"
            name="name"
            placeholder="Enter your nane"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </ContainerInput>
        <ContainerInput>
        <PiAtBold size={30} style={{ color: '#113f67', marginRight: '10px' }} />
          <InputFilter
            type="email"
            name="email"
            placeholder="Enter your email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
          />
        </ContainerInput>
        <ContainerInput>
        <PiPasswordFill size={30} style={{ color: '#113f67', marginRight: '10px' }}/>
          <InputFilter
            type="password"
            name="password"
            placeholder="Enter your password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            required
          />
        </ContainerInput>

        <LoginBtn type="submit">
        Registration <PiCheckFatFill style={{marginLeft: '8px'}}/>
        </LoginBtn>
      </FormLogin>
    </RegisterContainer>
  );
};