import Route from './route';
import Block from './block';
import { Paths } from '../typings/paths';

export default class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private currentRoute: Route | null = null;

  constructor(private rootQuery: string = '.main') {
    if (Router.__instance) {
      return Router.__instance;
    }
    Router.__instance = this;
  }

  public use(path: Paths, view: new ({}) => Block) {
    const route = new Route(path, view, {rootQuery: this.rootQuery});
    this.routes.push(route);
    return this;
  }
  
  public start() {
    window.onpopstate = ((event: PopStateEvent) => {
      this.onRoute(event!.currentTarget!.location.pathname)
    }).bind(this);
    this.onRoute(window.location.pathname as Paths);
  }

  private onRoute(path: Paths) {
    const route = this.getRoute(path);
    if (!route) return;
    if (this.currentRoute && this.currentRoute !== route) this.currentRoute.leave();
    this.currentRoute = route;
    if (route !== null) route.render();
  }

  public go(path: Paths) {
    this.history.pushState({}, '', path);
    this.onRoute(path);
  }

  public back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  public getRoute(path: Paths) {
    const route = this.routes.find((route: Route) => route.match(path));
    if (!route) {
      return this.routes.find((route: Route) => route.match('/404'));
    }
    return route; 
  }
}
