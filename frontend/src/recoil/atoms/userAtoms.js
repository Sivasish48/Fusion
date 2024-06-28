// recoil/atoms/userAtoms.js
import { atom } from 'recoil';
//import { localStorageEffect } from '../utils/localStorageEffect.js';

export const userState = atom({
  key: 'userState',
  default: {
   isLoading:true,
   userEmail:null,
  },
  //effects_UNSTABLE: [localStorageEffect('userState')],
});
