import { IInputSchema } from '../../shared/types/types';

interface ISignUpFormSchema {
  email: IInputSchema
  login: IInputSchema
  first_name: IInputSchema
  second_name: IInputSchema
  display_name: IInputSchema
  phone: IInputSchema
  password: IInputSchema
  repPassword: IInputSchema
}

const signUpFormSchema: ISignUpFormSchema = { 
  email: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema): void { this.email.isValid = this.email.regEx.test(this.email.value)},
    errorText: 'Недопустимый емейл. Проверьте правильность.',
  },
  login: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema) { this.login.isValid = this.login.regEx.test(this.login.value)},
    errorText: 'Только латиница и кириллица',
  },
  first_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema) { this.first_name.isValid = this.first_name.regEx.test(this.first_name.value)},
    errorText: 'Только латиница и кириллица',
  },
  second_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema) { this.second_name.isValid = this.second_name.regEx.test(this.second_name.value)},
    errorText: 'Только латиница и кириллица',
  },
  display_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema) { this.display_name.isValid = this.display_name.regEx.test(this.display_name.value)},
    errorText: 'Только латиница и кириллица',
  },
  phone: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: function(this: ISignUpFormSchema) { this.phone.isValid = this.phone.regEx.test(this.phone.value)},
    errorText: 'Неверный формат номера: +00(000)000-00-00',
  },
  password: {
    value: '',
    isValid: false,
    regEx: /^[a-za-z]+$/,
    validator: function(this: ISignUpFormSchema): void { this.password.isValid = this.password.regEx.test(this.password.value)},
    errorText: 'Длиннее 3 символов, одна заглавная, одна цифра',
  },
  repPassword: {
    value: '',
    isValid: false,
    regEx: /^[a-za-z]+$/,
    validator: function(this: ISignUpFormSchema): void { this.repPassword.isValid = (this.password.value === this.repPassword.value) },
    errorText: 'пароли не совпадают',
  }
};

export default signUpFormSchema;
