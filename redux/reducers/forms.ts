import { getInitialFieldsState } from './fields';
import { Action } from '../actions';
import fieldsReducer from './fields';

export type FormState = any;

export type FormGlobalState = {
  formsList: FormState[],
  activeForm: number,
}

export const initialState: FormGlobalState = {
  formsList: [getInitialFieldsState()],
  activeForm: 0
}

/* istanbul ignore next */
const reducer = (state: FormGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_NEW_FORM': {
      return {
        ...state,
        formsList: [ ...state.formsList, getInitialFieldsState() ],
      };
    }
    case 'SET_ACTIVE_FORM': {
      return {
        ...state,
        activeForm: action.index,
      };
    }
    case 'SET_NUMBER_FIELD_VALUE': {
      const newFormlist = [...state.formsList];
      newFormlist[action.formIndex] = fieldsReducer(state.formsList[action.formIndex], action);
      return {
        ...state,
        formsList: newFormlist,
      }
    }
    case 'SET_TEXT_FIELD_VALUE': {
      const newFormlist = [...state.formsList];
      newFormlist[action.formIndex] = fieldsReducer(state.formsList[action.formIndex], action);

      return {
        ...state,
        formsList: newFormlist,
      }
    }
    default:
      return state;
  }
};

export default reducer;
