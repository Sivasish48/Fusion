// recoil/atoms/userAtoms.js
import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    currentUser: null,
    isLoading: true,
    error: null,
  },
});
