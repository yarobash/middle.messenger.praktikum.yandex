import { Block } from '../../utils';
import { ErrorBox } from './components/error-box/error-box';
import template from './error-page.hbs';
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

export const _404Page = new ErrorPage({
  errorBox: _404ErrorBox,
});

export const _500Page = new ErrorPage({
  errorBox: _500ErrorBox,
});
