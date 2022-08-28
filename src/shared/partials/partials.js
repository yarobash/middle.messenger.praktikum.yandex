import handlebars from 'handlebars/dist/handlebars.runtime';

import outMsgPart from '../../components/out-message/outMessage.hbs';
import inMsgPart from '../../components/in-message/inMessage.hbs';
import msgImgPart from '../../components/msg-img/msgImg.hbs';
import textingForm from '../../components/texting-form/textingForm.hbs';
import curUserPart from '../../components/cur-user/curUser.hbs';
import chatManagePart from '../../components/chat-manage/chatManage.hbs';
import chatDatePart from '../../components/chat-date/chatDate.hbs';
import getProfilePart from '../../components/get-profile/getProfile.hbs';
import searchChatsPart from '../../components/search-chats/searchChats.hbs';
import attachBtnPart from '../../components/attach-btn/attachBtn.hbs';
import chatsPart from '../../components/chats/chats.hbs'
import chatWidgetPart from '../../components/chat-widget/chatWidget.hbs';
import userAvatarPart from '../../components/user-avatar/userAvatar.hbs';
import userSettingsFormPart from '../../components/user-settings-form/userSettingsForm.hbs';
import btnBackPart from '../../components/btn-back/btnBack.hbs';
import signUpFormPart from '../../components/sign-up-form/signUpForm.hbs';
import signInFormPart from '../../components/sign-in-form/signInForm.hbs';
import err500Part from '../../components/err500/err500.hbs';

export default () => {
  handlebars.registerPartial('outMsgPart', outMsgPart);
  handlebars.registerPartial('inMsgPart', inMsgPart);
  handlebars.registerPartial('msgImgPart', msgImgPart);
  handlebars.registerPartial('textingForm', textingForm);
  handlebars.registerPartial('curUserPart', curUserPart);
  handlebars.registerPartial('chatManagePart', chatManagePart);
  handlebars.registerPartial('chatDatePart', chatDatePart);
  handlebars.registerPartial('getProfilePart', getProfilePart);
  handlebars.registerPartial('searchChatsPart', searchChatsPart);
  handlebars.registerPartial('attachBtnPart', attachBtnPart);
  handlebars.registerPartial('chatsPart', chatsPart);
  handlebars.registerPartial('chatWidgetPart', chatWidgetPart);
  handlebars.registerPartial('userAvatarPart', userAvatarPart);
  handlebars.registerPartial('userSettingsFormPart', userSettingsFormPart);
  handlebars.registerPartial('btnBackPart', btnBackPart);
  handlebars.registerPartial('signUpFormPart', signUpFormPart);
  handlebars.registerPartial('signInFormPart', signInFormPart);
  handlebars.registerPartial('err500Part', err500Part);
};
