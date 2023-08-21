import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then( module => module.AuthModule)
  },
  {
    path:'todo',
    loadChildren:()=>import('./todo/todo.module').then(module=>module.TodoModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
