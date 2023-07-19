import { Navigation, StyledLink } from './AuthNav.styled';
import { PiSignInFill, PiCheckSquareBold } from "react-icons/pi";

export const AuthNav = () => {
  return (
    <Navigation>
      <StyledLink to="/register">
        Register 
        <PiCheckSquareBold style={{ marginLeft: '8px' }} size={20}/>
      </StyledLink>
      <StyledLink to="/login">
        Login 
        <PiSignInFill style={{ marginLeft: '8px' }} size={20}/>
        </StyledLink>
    </Navigation>
  );
};