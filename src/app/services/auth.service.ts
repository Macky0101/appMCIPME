import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    // private storage :Storage
  ) { }

  // login(user:any): Observable<any> {
  //   return this.http.post(`${environment.baseUrl}/api/system/login`,user)

  // };

  login(user:any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/system/login`,user).pipe(
      tap((response: any) => {
        // Stocker le token d'accès
        this.setAccessToken(response.token);
        // Stocker les informations de l'utilisateur
        this.setUserInfo(response.data.user);
      })
    );
  }


  logout(): Observable<any> {
    // Supprimer le token d'accès du localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    // Envoyer une requête HTTP de déconnexion au serveur
    return this.http.post(`${environment.baseUrl}/api/auth-user-logout`, {});
  }

  // Méthode pour stocker le token dans le localStorage
  setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  isLoggedIn(): boolean {
    // Vérifiez si le token existe dans le localStorage
    const token = localStorage.getItem('accessToken');
    // Si le token existe, l'utilisateur est considéré comme connecté
    return !!token;
  }

    // Méthode pour stocker les informations de l'utilisateur dans le localStorage
  setUserInfo(user: any): void {
    localStorage.setItem('userInfo', JSON.stringify(user));

  }

  // Méthode pour récupérer les informations de l'utilisateur du localStorage
  getUserInfo(): any {
    const user = localStorage.getItem('userInfo');
    return user ? JSON.parse(user) : null;
  }


}
