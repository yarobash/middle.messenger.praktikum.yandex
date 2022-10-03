import { IInputSchema } from '../../shared/types/types';

interface ISignInFromSchema {
  login: IInputSchema
  password: IInputSchema
}

const signInFormSchema: ISignInFromSchema = {
  login: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignInFromSchema) { this.login.isValid = this.login.regEx.test(this.login.value)},
    errorText: 'Только латиница и кириллица',
  },
  password: {
    value: '',
    isValid: false,
    regEx: /^[a-za-z]+$/,
    validator: function(this: ISignInFromSchema): void { this.password.isValid = this.password.regEx.test(this.password.value)},
    errorText: 'Длиннее 3 символов, одна заглавная, одна цифра',
  },
}

export default signInFormSchema;
