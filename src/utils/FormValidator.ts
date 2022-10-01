type inputEntity = {
  value: string,
  isValid: boolean,
  readonly regEx: RegExp,
}
type formState = {[key: string]: inputEntity};

const signUpFormState: formState = {
  email: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  login: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  first_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  second_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  display_name: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  phone: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  password: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
  },
  repPassword: {
    value: '',
    isValid: false,
    regEx: /^[a-zA-Z]+$/,
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
  signUpFormState[name].isValid = signUpFormState[name].regEx.test(signUpFormState[name].value);
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
}
