import {Component} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {User} from './models/user';
import {Post} from './models/post';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ang-app7';
  users: User[];
  user: User={id:0,name:'',username:''};
  posts: Post[];
  post: Post={id:0};
  


  constructor(private userService: UserService,
    private postService: PostService,
) {
  this.userService.getUsers().subscribe(value => 
    this.users=value)   
    console.log(this.users)
 
  }

  searchUser(form: NgForm): void {    
   
      this.userService.getUserById(form.controls.id.value).subscribe(value => 
       this.user=value   )
      console.log(this.user)

      this.postService.getPostByUserId(form.controls.id.value).subscribe(value => 
          this.posts=value)
          console.log(this.posts)
       
      this.postService.getPost(form.controls.idP.value).subscribe(value => 
        this.post=value)
         console.log(form.controls.idP.value) ;
       
         console.log(this.post)    
         
      
      
}

}


