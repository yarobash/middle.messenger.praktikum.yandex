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
