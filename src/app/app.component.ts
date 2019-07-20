import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray: any[];
  
  constructor() {
    this.todoArray = [];
  }
  addTodo(todo: any): boolean {
    if(!todo) {
      return false;
    }
    this.todoArray.push(todo.value);
    todo.value = "";
  }
  deleteItem(value: any): void {
    for (let i=0; i < this.todoArray.length; i++) {
      if (value == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
  sortedTodoList(): any[] {
    return this.todoArray.sort();
  }
  todoSubmit(form: any): void {
    if (form !== "") {
      this.todoArray.push(form);
    }
  }
}
