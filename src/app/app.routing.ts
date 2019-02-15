import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterUserComponent } from './register-user/register-user.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterUserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
