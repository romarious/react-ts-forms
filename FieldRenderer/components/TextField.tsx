import React, {useCallback} from 'react'
import FieldHeader from '../FieldHeader'
import { SetTextFieldValue } from '../../redux/actions'
import { useDispatch } from 'react-redux';

type Props = {
  fieldId: string
  fieldName: string
  value: string
  formIndex: number
}

const TextField = (props: Props) => {
  const dispatch = useDispatch()

  const setValue = useCallback((e) => {
    const action: SetTextFieldValue = {
      type: 'SET_TEXT_FIELD_VALUE',
      fieldId: props.fieldId,
      value: e.target.value,
      formIndex: props.formIndex
    };
    
    dispatch(action)
  }, [dispatch, props.fieldId, props.formIndex])

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName}/>
      <input style={styles.input} onChange={setValue} value={props.value}/>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex', flexDirection: 'column'
  },
  input: {
    width: '100%' ,
    border: '1px solid lightgray',
    minHeight: 24,
    borderRadius: 4,
    marginRight: 16,
    paddingLeft: 6
  }
}

export default TextField;
