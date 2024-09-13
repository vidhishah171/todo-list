import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor() {
    // setTimeout(() => {
    //   this.title="My To Do List";
    // }, 2000);
  }
}
