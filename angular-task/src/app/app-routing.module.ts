import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'create', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditTaskComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
