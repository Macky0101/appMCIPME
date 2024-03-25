import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RedirectServiceService } from './services/redirect-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router,
    private authService: AuthService,
    private http: HttpClient,
    private redirectService: RedirectServiceService
  ) {
    // this.initializeApp();

  }
  // async initializeApp() {
  //   const isLoggedIn =  this.authService.isLoggedIn();

  //   console.log(isLoggedIn);

  //   if (isLoggedIn) {
  //     this.router.navigateByUrl('/home');
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }

  ngOnInit(): void {
    // Appel de la méthode pour rediriger vers la page appropriée
    this.redirectService.redirectToCorrectPage();
  }

}
