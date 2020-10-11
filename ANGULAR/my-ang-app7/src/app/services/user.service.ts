import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

}