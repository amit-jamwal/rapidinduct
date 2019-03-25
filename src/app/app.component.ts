import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'Rapid Induct';
  public showNavBar: boolean = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authenticationService._showNavBar.subscribe(val => {
      this.showNavBar = val;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.showNavBar = false;
    this.router.navigate(['/']);
  }
}
