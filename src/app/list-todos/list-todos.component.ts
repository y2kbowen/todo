import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new ToDo(1, "Learn Angular", false, new Date()),
  //   new ToDo(2, "Plan Yellowstone", false, new Date()),
  //   new ToDo(3, "Find a Valentine", false, new Date())
  // ]

  todos : ToDo[]
  message : string

  constructor(
    private todoDataService : TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoDataService.retrieveAllTodos('ken').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id): void {
    this.todoDataService.deleteTodo('ken',id).subscribe (
      response => {
        console.log(response)
        this.message =  `delete successful for ${id}`
        this.refreshTodos();
      }

    )
    
  }

  editTodo(id): void {
    this.router.navigate(['editTodo',id])
    

  }

  


}
