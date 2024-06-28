import { userState } from "../atoms/userAtoms.js";
import {selector} from "recoil";

export const isUserLoading = selector({
  key: 'userLoadingState',
  get: ({get}) => {
    const state = get(userState);

    return state.isLoading;
  },
});