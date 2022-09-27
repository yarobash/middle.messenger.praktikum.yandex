import Block from '../../utils/Block';
import { Props } from '../../utils/Block';
import msgImg from './msgImg.hbs';
import msgImgContext from './msg-img-context';

class MsgImg extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.handleTemplate(msgImg, this.props);
  }
}

export default new MsgImg(msgImgContext);
