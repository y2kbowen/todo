import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'welcome' , component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'welcome/:name' , component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'todos', component: ListTodosComponent,canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService]},  
  {path: 'editTodo/:id', component: TodoEditorComponent, canActivate:[RouteGuardService]},
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
