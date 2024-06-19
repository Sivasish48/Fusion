import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userAtoms.js';

export const useUserActions = () => {
  const setUser = useSetRecoilState(userState);

  const signInStart = () => {
    setUser((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));
  };

  const signInSuccess = (user) => {
    setUser({
      currentUser: user,
      loading: false,
      error: null,
    });
  };

  const signInFailure = (error) => {
    setUser((prevState) => ({
      ...prevState,
      loading: false,
      error,
    }));
  };

  return {
    signInStart,
    signInSuccess,
    signInFailure,
  };
};
