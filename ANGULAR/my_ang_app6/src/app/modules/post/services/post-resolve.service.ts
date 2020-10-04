import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Post} from '../models/post';
import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {DataTransferService} from '../../../services/data_transfer.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {


  constructor(private postService: PostService,
    private dataTransferService: DataTransferService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    const user=this.dataTransferService.getUser();
    const id=user.id;
    console.log(id)
    return this.postService.getPostByUserId(id);
  }
}