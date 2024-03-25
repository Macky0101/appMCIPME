import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectServiceService {

  constructor(
     private authService: AuthService,
     private router: Router)
     { }

     redirectToCorrectPage(): void {
      if (this.authService.isLoggedIn()) {
        const user = this.authService.getUserInfo();
        // console.log(user);

        if (user && user.Direction) {
          const direction = user.Direction.toUpperCase();
          switch (direction) {
            case 'DNCIC':
              this.router.navigateByUrl('/home');
              // this.router.navigateByUrl('/dncic');
              break;
            case 'DNI':
              this.router.navigateByUrl('/dncic');
              // this.router.navigateByUrl('/home');
              break;
            case 'CABINET':
              this.router.navigateByUrl('/page-cabinet');
              break;
            default:
              this.router.navigateByUrl('/page-login');
              break;
          }
        } else {
          this.router.navigateByUrl('/page-login');
        }
      }
    }
}
