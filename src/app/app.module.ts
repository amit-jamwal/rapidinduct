import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ForgotPasswordComponent, RegisterUserComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule, HttpClientModule, routing, MatButtonModule, MatCheckboxModule],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
