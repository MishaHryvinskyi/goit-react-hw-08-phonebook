import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authorization/operation';
import { useAuth } from '../../hooks/useAuth';
import { HederTitle, HederContainer, BtnLog } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <HederContainer>
      <HederTitle>Welcome, {user.name}</HederTitle>
      <BtnLog type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLog>
    </HederContainer>
  );
};