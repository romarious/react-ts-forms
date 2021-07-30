import React, {useCallback} from 'react'
import FieldHeader from '../FieldHeader'
import { SetNumberFieldValue } from '../../redux/actions'
import { useDispatch } from 'react-redux';
import NumericInput from 'react-numeric-input';

type Props = {
  fieldId: string
  fieldName: string
  value: number
  formIndex: number
}

const NumberField = (props: Props) => {
  const dispatch = useDispatch()

  const setValue = useCallback((valueAsNumber) => {
    const action: SetNumberFieldValue = {
      type: 'SET_NUMBER_FIELD_VALUE',
      fieldId: props.fieldId,
      value: valueAsNumber,
      formIndex: props.formIndex
    }
    dispatch(action)
  }, [dispatch, props.fieldId, props.formIndex])

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName}/>
      <div>
        <div style={styles.input} >
        <NumericInput value={props.value} onChange={setValue} />
        </div>
      </div>
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

export default NumberField;
