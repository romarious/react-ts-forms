export type SetTextFieldValue = {
    type: 'SET_TEXT_FIELD_VALUE';
    fieldId: string;
    value: string;
    formIndex: number;
};

export type SetNumberFieldValue = {
    type: 'SET_NUMBER_FIELD_VALUE';
    fieldId: string;
    value: number;
    formIndex: number;
};

export type AddNewFormAction = {
    type: 'ADD_NEW_FORM';
};

export type SetActiveFormAction = {
    type: 'SET_ACTIVE_FORM';
    index: number;
};

export type Action =
    | SetTextFieldValue
    | SetNumberFieldValue
    | AddNewFormAction
    | SetActiveFormAction
