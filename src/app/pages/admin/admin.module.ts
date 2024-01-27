import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './components/header/header-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAddWorkComponent } from './components/add-work/form-add-work.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    FormAddWorkComponent,
    MenuAdminComponent,
    LoginComponent
  ],
  exports:[
    HeaderAdminComponent,
    FormAddWorkComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      preventDuplicates: true
    })
  ]
})
export class AdminModule { }
