export interface IInputSchema {
  value: string,
  isValid: boolean,
  readonly regEx: RegExp,
  validator(): void,
  readonly errorText: string,
}
