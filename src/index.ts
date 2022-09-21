import Header from "./components/dev-proc/Header";
import { render } from "./utils/renderDOM";
import signInContext from './shared/contexts/sign-in';

const header = new Header({
  ...signInContext
});

render('.content', header);
