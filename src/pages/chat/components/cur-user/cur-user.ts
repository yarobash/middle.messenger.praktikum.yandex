import { Block } from '../../../../utils';
import template from './cur-user.hbs';
import './cur-user.css';

interface CurUserProps {
  name: string;
}

export class CurUser extends Block<CurUserProps> {
  constructor(props: CurUserProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
