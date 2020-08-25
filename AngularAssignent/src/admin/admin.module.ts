import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BorderColorDirective } from './directive/border-color.directive';


@NgModule({
  declarations: [BorderColorDirective],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
