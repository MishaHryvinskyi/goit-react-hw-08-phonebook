import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Authorization/operation';
import { AiOutlineLogin } from "react-icons/ai";
import { 
  LoginContainer,
  FormLogin,
  InputFilter,
  LoginTitle,
  ContainerInput,
  LoginBtn
} from './LoginForm.styled';
import { PiAtBold, PiPasswordFill } from "react-icons/pi";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <FormLogin onSubmit={handleSubmit}>
        <ContainerInput>
          <PiAtBold size={30} style={{ color: '#113f67', marginRight: '10px' }} />
          <InputFilter
            type="email"
            name="email"
            placeholder="Enter your email address"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
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
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
          />
        </ContainerInput>
        <LoginBtn type="submit">
          Login <AiOutlineLogin style={{ marginLeft: '8px' }} />
        </LoginBtn>
      </FormLogin>
    </LoginContainer>
  );
};