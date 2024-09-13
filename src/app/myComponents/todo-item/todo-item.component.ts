import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo : EventEmitter<Todo> = new EventEmitter();


  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
    console.log(`Delete clicked for ${todo.title}.`)
  }

  onCheckBoxClick(todo: Todo) {
    this.toggleTodo.emit(todo);
    console.log(`Checkbox marked for ${todo.title}.`)
  }
}
