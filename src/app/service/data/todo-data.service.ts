import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';
import { ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username, id) {
    return this.http.delete<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id) {
    return this.http.get<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.http.put<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`
      , todo)
  }

  createTodo(username, todo) {
    return this.http.post<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/`
    , todo);
  }

}
