import { Block } from '../../../../utils';
import template from './get-profile.hbs';
import './get-profile.css';

interface GetProfileProps {
  btnCaption: string;
}

export class GetProfile extends Block<GetProfileProps> {
  constructor(props: GetProfileProps) {
    super(props);
  } 

  public render() {
    return this.compile(template, this.props);
  }
}
