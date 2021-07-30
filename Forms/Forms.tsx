import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewFormAction, SetActiveFormAction } from '../redux/actions';
import { GlobalState } from '../redux/reducers';
import './tabsStyle.css';

const Forms = () => {
  const dispatch = useDispatch()
  const forms = useSelector((state: GlobalState) => state.forms.formsList);
  const activeForm = useSelector((state: GlobalState) => state.forms.activeForm)

  const addNewForm = useCallback(() => {
    const action: AddNewFormAction = {
      type: 'ADD_NEW_FORM'
    }
    dispatch(action)
  }, [dispatch])

  const selectForm = useCallback((index) => {
    const action: SetActiveFormAction = {
      type: 'SET_ACTIVE_FORM',
      index: index,
    }
    dispatch(action)
  }, [dispatch])

  return (
    <div>
      <div className='header'>
        {forms.map((_form, index) => {
          const currentStyle = (index === activeForm) ? 'tab active' : 'tab';

          return (
            <div  className={currentStyle} key={index} onClick={() => selectForm(index)}>
            Form {index + 1}
            </div>
          );
        })}
        <div className='tab' onClick={() => addNewForm()}>+</div>
      </div>
    </div>
  )
}

export default Forms;
