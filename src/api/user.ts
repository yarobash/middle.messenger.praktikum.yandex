import { HTTPRequest } from '../utils';
import { baseURL } from './constants';

const request = new HTTPRequest(baseURL);

export default class userAPI {
  static passwordChange(data: Record<string, unknown>){
    return request.put(`/user/password`, {data});
  }

  static profileDataChange(data: Record<string, unknown>){
    return request.put(`/user/profile`, {data});
  }

  static profileChangeAvatar(data: FormData){
    return request.put(`/user/profile/avatar`, {data});
  }
}
