import { Block } from '../../../../utils';
import template from './msg-img.hbs';
import './msg-img.css';

interface MsgImgProps {
  imgSrc: string;
  imgAlt: string;
  imgTimeStamp: string;
}

export class MsgImg extends Block<MsgImgProps> {
  constructor(props: MsgImgProps) {
    super(props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}
