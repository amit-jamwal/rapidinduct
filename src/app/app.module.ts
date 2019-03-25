import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { FileUploadModule } from 'ng2-file-upload';
import { CommonService } from './services/common.service';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';
import { TrainingQuizComponent } from './training-quiz/training-quiz.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ForgotPasswordComponent, RegisterUserComponent, CreateTrainingComponent, EditTrainingComponent, TrainingQuizComponent, UploadComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule, HttpClientModule, routing, MatButtonModule, MatCheckboxModule, FormsModule, NgSelectModule, FileUploadModule],
  providers: [AuthGuard, AuthenticationService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
