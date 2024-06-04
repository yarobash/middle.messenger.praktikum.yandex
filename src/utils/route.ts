import renderDOM from './render-dom';
import { isStringsEqual } from './helpers';
import { Paths } from '../typings/paths';
import Block from './block';

export default class Route {
  private view: typeof Block;
  constructor(private path: Paths, private block: typeof Block, private props: P) {
    this.path = path;
    this.block = block;
    this.props = props;
  }

  public navigate(targetPath: Paths) {
    if (this.match(targetPath)) {
      this.path = targetPath;
      this.render();
    }
  }

  public leave() {
    if (this.view) {
      this.view.hide();
    }
  }

  private match(targetPath: Paths) {
    return isStringsEqual(targetPath, this.path);
  }

  private render() {
    if (!this.view) {
      this.view = new this.block(this.props);
      renderDOM(this.props.queryRoot, this.view);
      return;
    }
    this.view.show();
  }
}
