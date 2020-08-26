import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common'
import { DefaultLayoutComponent } from '../admin/containers/default-layout.component';
import { LoginFormComponent } from '../admin/auth/login-form/login-form.component';
import { AuthGuardService} from '../admin/auth/auth-guard.service'
import { LogoutComponent } from 'src/admin/auth/logout/logout.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
      path:'',
      component: DefaultLayoutComponent,
      canActivate: [AuthGuardService],
      children:[
        {
          path:'admin',
          loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
        }
      ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
