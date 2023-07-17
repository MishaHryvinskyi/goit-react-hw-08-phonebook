import { Navigation, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Navigation>
  );
};