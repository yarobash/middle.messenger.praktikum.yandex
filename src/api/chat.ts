import { HTTPRequest } from '../utils';
import { baseURL } from './constants';

const request = new HTTPRequest(baseURL);

export default class ChatAPI {
  static newChat(data: Record<string, unknown>){
    return request.post(`/chats`, {data});
  }

  static allChatsData(){
    return request.get(`/chats`);
  }

  static findUserByLogin(data: Record<string, unknown>){
    return request.post(`/user/search`, {data});
  }

  static addUserToChat(data: Record<string, unknown>){
    return request.put(`/chats/users`, {data});
  }

  static deleteUserFromChat(data: Record<string, unknown>){
    return request.delete(`/chats/users`, {data});
  }

  static getChatToken(id: number){
    return request.post(`/chats/token/${id}`);
  }
}
