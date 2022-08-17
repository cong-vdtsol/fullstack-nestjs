import { BaseService } from "../base-service";

class Auth extends BaseService {
  basePath: any;
  getMe() {
    return this.http.get(`${this.basePath}/me`).then((res) => res.data);
  }
  login(input: any) {
    return this.http
      .post(`${this.basePath}/login`, input)
      .then((res) => res.data);
  }
  postUser(data: any) {
    return this.http.post(`${this.basePath}/register`, data);
  }
  postReset(data: any){
    return this.http.post(`${this.basePath}/reset`, data);
  }
  postChangePass(data: any){
    return this.http.post(`${this.basePath}/changepassword`, data);
  }
}

export const AuthService = new Auth("auth");
