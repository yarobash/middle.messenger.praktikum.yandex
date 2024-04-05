import path from 'path';
import { fileURLToPath } from 'url';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  plugins: [
    mixins({mixinsDir: path.join(__dirname, 'src/shared/styles/mixins')}),
    nested(),
  ],
}
