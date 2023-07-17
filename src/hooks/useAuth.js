import { useSelector } from 'react-redux';
import { selectedUser, selectedIsLoggedIn, selectedIsRefreshing } from 'redux/Authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const isRefreshing = useSelector(selectedIsRefreshing);
  const user = useSelector(selectedUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};