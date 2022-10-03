type inputEntity = {
  value: string,
  isValid: boolean,
  readonly regEx: RegExp,
  validator(): void,
  readonly errorText: string,
}
type formSchema = {[key: string]: inputEntity};

export default class FormValidator{
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
