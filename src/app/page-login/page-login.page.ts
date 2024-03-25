import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { RedirectServiceService } from '../services/redirect-service.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})

export class PageLoginPage implements OnInit {
  form!: FormGroup;
  userConnecte: any;
  test:any;
  constructor(
      private authService: AuthService,
      private router: Router,
      private formBuilder: FormBuilder,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private redirectService: RedirectServiceService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.redirectService.redirectToCorrectPage();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async onlogin(){
    const loading = await this.loadingCtrl.create({
      message: 'veuillez patienter...',
    });
    loading.present();

    this.authService.login(this.form.value).subscribe({
      next: async (response: any) => {
        const userConnecter = response
        // this.authService.setUser(userConnecter)
        // console.log('User', userConnecter);
        // Stockage du token dans le localStorage
        this.authService.setAccessToken(response.data.access_token);
        // console.log('Access token',);
        // await this.authService.setAccessToken(response.access_token);

        loading.dismiss();
        this.form.reset()
        this.presentToast('Connexion réussie !');

        // this.router.navigateByUrl('/dncic');

        if (response.data.user) {
          // Code correct, rediriger vers la page d'accueil
          if(response.data.user.FirstConnexion === 3){
            this.router.navigate(['/page-login']);
          }else{
            this.router.navigate(['/dncic']);
          }
        } else {
          // Afficher un message d'erreur à l'écran
          this.presentToast('Code incorrect. Veuillez réessayer.');
        }

      },
      error: (error) => {
        loading.dismiss();
        this.presentToast('Erreur lors de la connexion. Veuillez réessayer.');
      },
    });
  }
  }
