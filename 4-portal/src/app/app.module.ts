import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { RegisterComponent } from './screens/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './shared/api.service';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { UsersComponent } from './screens/users/users.component';
import { AuthService } from './shared/auth.service';
import { EditComponent } from './screens/edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DefaultLayoutComponent,
    NavbarComponent,
    UsersComponent,
    EditComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
