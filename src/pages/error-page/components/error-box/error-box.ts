import { Block } from '../../../../utils';
import template from './error-box.hbs';
import './error-box.css';

interface ErrorBoxProps {
  errNum: string;
  errMsg: string;
  linkLbl: string;
}

export class ErrorBox extends Block<ErrorBoxProps> {
  constructor(props: ErrorBoxProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
