import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {

  id: number
  todo: ToDo
  user: string

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.user = this.route.snapshot.params['user'];
    this.user = 'ken'; // This is broken because this screen does not have user
    this.todo = new ToDo(this.id, '', false, new Date())
    if (this.id > 0) {
      this.todoDataService.retrieveTodo(this.user, this.id)
        .subscribe(
          data => this.todo = data
        )
    }
  }

  saveTodo() {
    if (this.id > 0) {
      this.todoDataService.updateTodo(this.user, this.id, this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['todos']);
        })
    }
    else {
      this.todoDataService.createTodo(this.user, this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['todos']);
        })
    }
  }

}
