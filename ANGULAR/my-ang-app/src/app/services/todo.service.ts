import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodoModel} from "../models/todo.model";


@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodolist(): Observable<ITodoModel[]> {
    let a=this.http.get<ITodoModel[]>('https://myhm-fcbd9.firebaseio.com/todo.json')
    console.log(a,'DB')
    return a;
  }

}