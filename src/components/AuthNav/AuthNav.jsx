import { Navigation, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Navigation>
  );
};