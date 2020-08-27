import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common'
import { DefaultLayoutComponent } from '../admin/containers/default-layout.component';
import { LoginFormComponent } from '../admin/auth/login-form/login-form.component';
import { AuthGuard} from '../admin/auth/auth.guard';

const routes: Routes = [
  // {
  //   path: '', 
  //   redirectTo: 'login', 
  //   pathMatch: 'full'
  // },
  {
      path:'',
      component: DefaultLayoutComponent,
      canActivate: [AuthGuard],
      children:[
        {
          path:'admin',
          // canActivateChild:[AuthGuard],
          loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
        }
      ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
