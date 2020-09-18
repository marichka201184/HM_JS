import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;
  id: number;
  


  constructor(private postService: PostService) {

  }
  
  MyId(id:number) {
    console.log(id)
    this.postService.getPostByUserId(id).subscribe(value => 
      console.log(value))
    
  }
  // getUserById(id: number): Observable<User> {
  //   console.log(id)
  //   let a=this.http.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);
  //   console.log(a)
  //   return a;
  // }

  

}

