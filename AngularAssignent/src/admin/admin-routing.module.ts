import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './modules/products/products.module';
import { AuthGuardService} from '../admin/auth/auth-guard.service';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'products',
  //   pathMatch:'full'
  // },
  {
    path:'products',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
