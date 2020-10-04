import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {DataTransferService} from '../../../services/data_transfer.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,private dataTransferService: DataTransferService
    ) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getPostByUserId(id: number): Observable<Post[]> {
    
    console.log(this.dataTransferService.getUser())
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);

  }

 
}