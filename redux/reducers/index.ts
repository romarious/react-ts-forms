import { combineReducers } from 'redux';
import forms, { FormGlobalState } from './forms';

export type GlobalState = {
  forms: FormGlobalState;
};

export default combineReducers({
  forms,
});
