import renderDOM from './render-dom';
import { isStringsEqual } from './helpers';
import { Paths } from '../typings/paths';
import Block from './block';

export default class Route {
  private block: Block | null = null;
  constructor(
    private path: Paths,
    private view: new ({}) => Block,
    private props: { rootQuery: string },
  ) {}

  public navigate(path: Paths) {
    if (this.match(path)) {
      this.path = path;
      this.render();
    }
  }

  public leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  public match(targetPath: Paths) {
    return isStringsEqual(targetPath, this.path);
  }

  render() {
    if (!this.block) {
      this.block = new this.view({});
      renderDOM(this.props.rootQuery, this.block);
      return;
    }
    this.block.show();
  }
}
