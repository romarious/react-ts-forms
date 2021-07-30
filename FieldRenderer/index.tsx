import React from 'react';
import { Field } from '../redux/reducers/fields';
import TextField from './components/TextField';
import NumberField from './components/NumberField';

type Props = {
  field: Field;
  formIndex: number;
};

const FieldRenderer: FC<Props> = ({ field, formIndex }) => {
  const typeF = field.type;
  switch (field.type) {
    case 'text':
      return (
        <TextField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
          formIndex={formIndex}
        />
      );
    case 'number':
      return (
        <NumberField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
          formIndex={formIndex}
        />
      );
    default:
      throw new Error(`Unknown field type: ${typeF}`);
  }
};

export default FieldRenderer;
