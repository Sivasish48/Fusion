import { atom } from 'recoil';
import { localStorageEffect } from '../utils/localStorageEffect.js';

export const userState = atom({
  key: 'userState',
  default: {
    currentUser: null,
    error: null,
    loading: false,
  },
  effects_UNSTABLE: [localStorageEffect('userState')],
});