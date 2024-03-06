import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
 a:number;
 todos:Todo []=[];


constructor(){
  this.a=10;
  this.todos.push({
    content:'a',
    completed:true
  })
}

  
}
