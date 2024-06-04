import Route from './route';
import Block from './block';
import { Paths } from '../typings/paths';

export default class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private currentRoute: Route | undefined = undefined;

  constructor(private rootQuery: string = '#root') {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.rootQuery = rootQuery;
    Router.__instance = this;
  }

  use(path: Paths, block: Block) {
    const route = new Route(path, block, {rootQuery: this.rootQuery});
    this.routes.push(route);
    return this;
  }
}
