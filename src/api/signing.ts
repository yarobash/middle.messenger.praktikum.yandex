import { HTTPRequest } from '../utils';
import { baseURL } from './constants';

const request = new HTTPRequest(baseURL);

export default class SigningAPI {
  static signup(data: Record<string, unknown>) {
    return request.post(`/auth/signup`, {data});
  }

  static login(data: Record<string, unknown> ){
    return request.post(`/auth/signin`, {data});
  }

  static getUser(){
    return request.get(`/auth/user`);
  }

  static logout(){
    return request.post(`/auth/logout`);
  }
}
