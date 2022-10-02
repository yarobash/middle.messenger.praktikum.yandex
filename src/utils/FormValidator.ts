type inputEntity = {
  value: string,
  isValid: boolean,
  readonly regEx: RegExp,
  validator(): void,
  readonly errorText: string,
}
type formSchema = {[key: string]: inputEntity};

class FormValidator{
  private formClass: string;
  private formState: formSchema; 

  constructor(formClass: string, formState: {}) {
    this.formClass = formClass;
    this.formState = formState;
  }

  private _toggleTargetValidity = (target: HTMLInputElement) => {
    const { name } = target;
    if (target.classList.contains(`${this.formClass}__inpt_initial`)) {
      target.classList.replace(
        `${this.formClass}__inpt_initial`,
        this.formState[name].isValid
          ? `${this.formClass}__inpt_valid`
          : `${this.formClass}__inpt_invalid`
      );
    } else {
      target.classList.remove(`${this.formClass}__inpt_valid`, `${this.formClass}__inpt_invalid`);
      target.classList.add(
        this.formState[name].isValid
          ? `${this.formClass}__inpt_valid`
          : `${this.formClass}__inpt_invalid`
      );
    }
  }

  private _toggleErrorMessage = (target: HTMLInputElement) => {
    const { name } = target;
    if (!this.formState[name].isValid) {
      target.nextElementSibling?.classList.remove(`${this.formClass}__error_hide`);
      target.nextElementSibling!.textContent = this.formState[name].errorText;
    } else {
      target.nextElementSibling?.classList.add(`${this.formClass}__error_hide`);
    }
  }

  private _isFormValid = () => {
    for (const prop in this.formState) {
      if (!this.formState[prop].isValid) {
        return false;
      }
    }
    return true;
  }

  public validateForm = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    const btn = document.querySelector(`.${this.formClass}__btn`) as HTMLButtonElement;

    this.formState[name].value = value;
    target.value = this.formState[name].value;
    this.formState[name].validator.bind(this.formState)();
     
    this._toggleTargetValidity(target);
    this._toggleErrorMessage(target);
    if (this._isFormValid()) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }
}

export const signUpFormValidator = new FormValidator(
  'sign-up-form',
  { 
    email: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function(): void { this.email.isValid = this.email.regEx.test(this.email.value)},
      errorText: 'Недопустимый емейл. Проверьте правильность.',
    },
    login: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function() { this.login.isValid = this.login.regEx.test(this.login.value)},
      errorText: 'Только латиница и кириллица',
    },
    first_name: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function() { this.first_name.isValid = this.first_name.regEx.test(this.first_name.value)},
      errorText: 'Только латиница и кириллица',
    },
    second_name: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function() { this.second_name.isValid = this.second_name.regEx.test(this.second_name.value)},
      errorText: 'Только латиница и кириллица',
    },
    display_name: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function() { this.display_name.isValid = this.display_name.regEx.test(this.display_name.value)},
      errorText: 'Только латиница и кириллица',
    },
    phone: {
      value: '',
      isValid: false,
      regEx: /^[a-zA-Z]+$/,
      validator: function() { this.phone.isValid = this.phone.regEx.test(this.phone.value)},
      errorText: 'Неверный формат номера: +00(000)000-00-00',
    },
    password: {
      value: '',
      isValid: false,
      regex: /^[a-za-z]+$/,
      validator: function(): void { this.password.isValid = this.password.regex.test(this.password.value)},
      errorText: 'Длиннее 3 символов, одна заглавная, одна цифра',
    },
    repPassword: {
      value: '',
      isValid: false,
      regex: /^[a-za-z]+$/,
      validator: function(): void { this.repPassword.isValid = (this.password.value === this.repPassword.value) },
      errorText: 'пароли не совпадают',
    }
  }
);
