export interface IFormUser {
  typeDocument: string;
  documentNumber: string;
  phoneNumber: string;
}

export interface IFormUserAction {
  type: string;
  field: string;
  payload: string;
}

export interface IFormUserError {
  field: string;
  isValid: boolean;
}
