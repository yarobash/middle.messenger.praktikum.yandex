export const constraints = {
  email: {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value);
    }, 
    errText: 'Недопустимый формат почты. Пример: ivanov@yandex.ru',
  },
  login: {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /(?!^\d+$)^[0-9a-zA-Z-_]{3,20}$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат логина. Используйте латиницу, цифры, дефис и подчёркивание. Длина от 3 до 20 символов',
  },
  'first_name': {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^[A-ZА-Я]{1}(?!(\d|\s)+$)[a-zа-я-]*$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат имени. Используйте латиницу или кириллицу, первая буква заглавная, без пробелов и без цифр, дефис можно',
  },
  'second_name': {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^[A-ZА-Я]{1}(?!(\d|\s)+$)[a-zа-я-]*$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат фамилии. Используйте латиницу или кириллицу, первая буква заглавная, без пробелов и без цифр, дефис можно',
  },
  'display_name': {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /(?!^\d+$)^[0-9a-zA-ZА-Яа-я-_]{3,20}$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат имени в чате. Используйте латиницу, цифры, дефис и подчёркивание. Длина от 3 до 20 символов',
  },
  phone: {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^(\+|\d){1}[\d]{10,14}$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат телефонного номера. Может начинаться с плюса, должен включать от 10 до 15 цифр',
  },
  password: {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return regex.test(value);
    }, 
    errText: 'Неверный формат пароля. Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  'rep_password': {
    required: true,
    state: 'default',
    password: '',
    validate: function(value: string) {
      return this.password === value;
    }, 
    errText: 'Пароли не совпадают',
  },
  message: {
    required: true,
    state: 'default',
    validate: function(value: string) {
      const regex = /^.+$/;
      return regex.test(value);
    },
    errText: '',
  },
};

