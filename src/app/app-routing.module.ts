import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { LoginComponent } from './pages/admin/components/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [authGuard]
  },
  {
    path: 'admin/add-work',
    component: AdminComponent,
    pathMatch: 'full'
    
  },
  {
    path: 'admin/works',
    component: AdminComponent,
    pathMatch: 'full'
    
  },
  { path: 'detalle/:id',
    component: WorkDetailComponent,
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
