type inputEntity = {
  value: string,
  isValid: boolean,
  readonly regEx: RegExp,
  validator: () => void,
  readonly errorText: string,
}
type formState = {[key: string]: inputEntity};

const signUpFormState: formState = {
  email: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.email.isValid = signUpFormState.email.regEx.test(signUpFormState.email.value),
    errorText: 'Недопустимый емейл. Проверьте правильность.',
  },
  login: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.login.isValid = signUpFormState.login.regEx.test(signUpFormState.login.value),
    errorText: 'Только латиница и кириллица',
  },
  first_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.first_name.isValid = signUpFormState.first_name.regEx.test(signUpFormState.first_name.value),
    errorText: 'Только латиница и кириллица',
  },
  second_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.second_name.isValid = signUpFormState.second_name.regEx.test(signUpFormState.second_name.value),
    errorText: 'Только латиница и кириллица',
  },
  display_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.display_name.isValid = signUpFormState.display_name.regEx.test(signUpFormState.display_name.value),
    errorText: 'Только латиница и кириллица',
  },
  phone: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.phone.isValid = signUpFormState.phone.regEx.test(signUpFormState.phone.value),
    errorText: 'Неверный формат номера: +00(000)000-00-00',
  },
  password: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.password.isValid = signUpFormState.password.regEx.test(signUpFormState.password.value),
    errorText: 'Длиннее 3 символов, одна заглавная, одна буква',
  },
  repPassword: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
    validator: () => signUpFormState.repPassword.isValid = (signUpFormState.password.value === signUpFormState.repPassword.value),
    errorText: 'Пароли не совпадают',
  }
}

export function validateSignUpForm(event: Event) {
  // set value of input in form object
  // set value in input based on from object value
  // test value with test function
  // set test result to form object
  // set input style depending on form object input isValid property
  // validate whole form
  // disable/enable submit btn depending on result of form validity
  const target = event.target as HTMLInputElement;
  const { name, value } = target;
  signUpFormState[name].value = value;
  target.value = signUpFormState[name].value;
  signUpFormState[name].validator();
  console.log(signUpFormState);

  if (target.classList.contains('sign-up-form__inpt_initial')) {
    target.classList.replace(
      'sign-up-form__inpt_initial',
      signUpFormState[name].isValid
        ? 'sign-up-form__inpt_valid'
        : 'sign-up-form__inpt_invalid'
    );
  } else {
    target.classList.remove('sign-up-form__inpt_valid', 'sign-up-form__inpt_invalid');
    target.classList.add(
      signUpFormState[name].isValid
        ? 'sign-up-form__inpt_valid'
        : 'sign-up-form__inpt_invalid'
    );
  }

  if (!signUpFormState[name].isValid) {
    target.nextElementSibling?.classList.remove('sign-up-form__error_hide');
    target.nextElementSibling?.textContent = signUpFormState[name].errorText;
  } else {
    target.nextElementSibling?.classList.add('sign-up-form__error_hide');
  }

  const generalValidityArr: string[] = [];
  Object.keys(signUpFormState).forEach((key) => generalValidityArr.push(signUpFormState[key].isValid.toString()));
  if(generalValidityArr.includes('false')) {
    document.querySelector('.sign-up-form__btn')?.disabled = true;
  } else {
    document.querySelector('.sign-up-form__btn')?.disabled = false;
  }
}
