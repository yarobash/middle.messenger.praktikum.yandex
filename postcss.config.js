import { resolve } from 'path';
//import preset from 'postcss-preset-env';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
//import vars from 'postcss-simple-vars';


export default {
  plugins: [
    //preset,
    mixins({mixinsDir: resolve('.', 'src/shared/styles/mixins/')}),
    nested(),
    //vars,
  ],
}
