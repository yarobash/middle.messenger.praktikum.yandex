import Handlebars from 'handlebars';
import { PluginOption } from 'vite';

export default function handlebars(): PluginOption {
  const fileExtensionRegexp = /\.hbs$|\.handlebars$/;

  return {
    name: 'vite-plugin-handlebars-precompile',
    transform: function(src: string, id: string) {
      if (!fileExtensionRegexp.test(id)) {
        return;
      }

      const code = `
        import Handlebars from 'handlebars/runtime';
        export default Handlebars.template(${Handlebars.precompile(src)});
      `;

      return {
        code
      }
    }
  }
}
