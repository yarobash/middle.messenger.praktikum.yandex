/*
 *
 * Всё это оказалось неожиданно трудно и объёмно для восприятия.
 * Мне кажется, что я розобрался с компонентным подходом.
 * Однако полноценная реализация пока не удалась.
 * Не хочу уходить в академ, я не терял время, не ленился, просто
 * получилось, что нужно очень много освоить нового.
 *
 * Это техническая попытка сдачи с целью выиграть время.
 * По моей оценке, мне ещё нужно минимум пару дней.
 *
 */
import Button from "./components/dev-proc/Button";
import Header from "./components/dev-proc/Header";
import { render } from "./utils/renderDOM";
import signInContext from './shared/contexts/sign-in';

const button = new Button({
  className: 'my-class',
  caption: 'Click me',
});

const header = new Header({
  ...signInContext
});

render('.content', header);
render('.content', button);
