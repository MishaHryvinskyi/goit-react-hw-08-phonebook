import { useAuth } from '../../hooks/useAuth';
import { HomeLink, Nav } from './Navigation.styled';
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <HomeLink to="/">Home <AiOutlineHome size={19} style={{ marginLeft: '8px'}} /></HomeLink>
      {isLoggedIn && <HomeLink to="/contacts">Contacts <AiOutlineContacts size={19} style={{ marginLeft: '8px'}} /></HomeLink>}
    </Nav>
  );
};