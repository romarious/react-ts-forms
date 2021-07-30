
import { useSelector } from 'react-redux';
import { GlobalState } from './reducers'
import { Field } from './reducers/fields'

/* istanbul ignore next */
export const useFields = (): { fields: Field[], formIndex: number } => {
  return useSelector((state: GlobalState) => {
    const { formsList, activeForm } = state.forms;
    
    return { fields: formsList[activeForm], formIndex: activeForm };
  });
};
