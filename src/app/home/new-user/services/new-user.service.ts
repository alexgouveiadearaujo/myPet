import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InewUser } from '../inew-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: InewUser) {
    return this.http.post('http://localhost:3000/user/signup', newUser);
  }

  checkExistingUser(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
