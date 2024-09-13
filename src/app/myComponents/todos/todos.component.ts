import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos!: Todo[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos = [ 
    // {
    //   sno: 1,
    //   title: "First task",
    //   desc: "Description",
    //   active: true
    // },
    // {
    //   sno: 2,
    //   title: "Second task",
    //   desc: "Description2",
    //   active: true
    // },
    // {
    //   sno: 3,
    //   title: "Third task",
    //   desc: "Description3",
    //   active: false
    // }
    // ]
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos.splice(index,1);
    console.log(this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    console.log(todo);
    todo.active = !todo.active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
