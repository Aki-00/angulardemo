import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BorderColorDirective } from './directive/border-color.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultLayoutComponent } from './containers/default-layout.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';



@NgModule({
  declarations: [BorderColorDirective, HeaderComponent, FooterComponent, DefaultLayoutComponent, LoginFormComponent, LogoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class AdminModule { }
