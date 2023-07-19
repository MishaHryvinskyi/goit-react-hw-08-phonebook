import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Authorization/operation';
import { useAuth } from '../../hooks/useAuth';
import { HederTitle, HederContainer, BtnLog, UserName } from './UserMenu.styled';
import { PiSignOutFill } from "react-icons/pi";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <HederContainer>
      <HederTitle>Welcome <UserName>{user.name}</UserName></HederTitle>
      <BtnLog type="button" onClick={() => dispatch(logOut())}>
        Logout <PiSignOutFill style={{ marginLeft: '8px'}} size={20}/>
      </BtnLog>
    </HederContainer>
  );
};