import { Block } from '../../utils';
import { ErrorBox } from './components/error-box/error-box';
import template from './error-page.hbs';
import template404 from './template404.hbs';
import template500 from './template500.hbs';
import './error-page.css';

const _404ErrorBox = new ErrorBox({
  errNum: '404',
  errMsg: 'Не туда попали',
  linkLbl: 'Назад к чатам',
});

const _500ErrorBox = new ErrorBox({
  errNum: '500',
  errMsg: 'Мы уже фиксим',
  linkLbl: 'Назад к чатам',
});

interface ErrorPageProps {
  errorBox: Block;
}

export class ErrorPage extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export class _404Page extends Block {
  constructor(props: {}) {
    super({
      ...props,
      _404ErrorPage: new ErrorPage({
        errorBox: _404ErrorBox,
      })
    });
  }

  render() {
    return this.compile(template404, this.props);
  }
}

export class _500Page extends Block {
  constructor(props: {}) {
    super({
      ...props,
      _500ErrorPage: new ErrorPage({
        errorBox: _500ErrorBox,
      })
    });
  }

  render() {
    return this.compile(template500, this.props);
  }
}
