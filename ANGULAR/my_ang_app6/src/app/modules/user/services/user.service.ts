import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  // }

  async getAllUsers(): Promise<User[]> {
    const users = await this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').toPromise();
    return users;
  }

}