import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../modules/user/models/User';
import {Post} from '../modules/post/models/Post';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  
  private userData: BehaviorSubject<Partial<User>> = new BehaviorSubject<Partial<User>>({});
  private postData: BehaviorSubject<Partial<Post>> = new BehaviorSubject<Partial<Post>>({});
 

  constructor() {
  }

  setUser(obj: User): void {
    this.userData.next(obj);
  }

  getUser(): Partial<User> {
    return this.userData.getValue();
  }

  setPost(post: Post): void {
    this.postData.next(post);
  }

  getPost(): Partial<Post> {
    return this.postData.getValue();
  }
}