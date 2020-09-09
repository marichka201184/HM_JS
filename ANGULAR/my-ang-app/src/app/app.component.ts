import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import {ITodoModel} from "./models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todolist: ITodoModel[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getTodolist().subscribe(jsonTodo => {
      console.log(jsonTodo,'TS');
        Object.entries(jsonTodo).forEach(entry => {
        const [key, value] = entry;
        this.todolist.push({key,value})
        console.log(key, value);
  })
     // this.users = jsonUsers
      console.log(this.todolist,'ARR')

     });
   
    

}
myFunc(){
   console.log('Click')    
}
}