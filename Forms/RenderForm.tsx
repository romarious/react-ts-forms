import React from "react";
import FieldRenderer from "../FieldRenderer";
import { Field } from "../redux/reducers/fields";
import { useFields } from "../redux/selectors";

const RenderForm = () => {
  const { fields, formIndex } = useFields();
  
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {fields.map((field: Field) => <FieldRenderer key={field.id} field={field} formIndex={formIndex}/>)}
    </div>
  )
}

export default RenderForm;
