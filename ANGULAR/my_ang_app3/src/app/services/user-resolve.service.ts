import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {


  constructor(private userService: UserService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }

 
}