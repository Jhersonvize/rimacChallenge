import { IFormUser, IFormUserAction, IFormUserError } from "../models/formUserModel";

export const reducerForm = (
    state: IFormUser,
    { type, field, payload }: IFormUserAction
) => {
    switch (type) {
        case 'inputChange':
            return {
                ...state,
                [field]: payload,
            };
        default:
            return state;
    }
};

export const reducerErrorForm = (
    state: IFormUserError[],
    { type, field }: IFormUserAction
) => {
    switch (type) {
        case 'inputError':
            state && (state.find((value: IFormUserError) => value.field === field)!.isValid = false)
            return [...state];
        case 'inputValid':
            state && (state.find((value: IFormUserError) => value.field === field)!.isValid = true)
            return [...state];
        default:
            return state;
    }
};