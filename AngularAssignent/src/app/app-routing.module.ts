import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common'

const routes: Routes = [
  {
      path:'',
      redirectTo:'admin',
      pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
