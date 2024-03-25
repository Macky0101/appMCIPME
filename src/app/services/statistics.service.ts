import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(
    private http : HttpClient,
  ) { }

 // Méthode pour générer les en-têtes
 getHeaders(): HttpHeaders {
  const token = localStorage.getItem('accessToken'); // Récupérer le jeton du localStorage
  return new HttpHeaders().set('Authorization', `Bearer ${token}`); // Créer les en-têtes avec le jeton
}

getStatistics(): Observable<any> {
  const headers = this.getHeaders(); // Utiliser la méthode getHeaders()
  return this.http.get(`${environment.baseUrl}/api/directions/statistics/dashboards`, { headers });
}

getStatisticsByYear(year?: number): Observable<any> {
  const headers = this.getHeaders(); // Utiliser la méthode getHeaders()

  // Construire l'URL en fonction de si l'année est fournie ou non
  const url = year ? `${environment.baseUrl}/api/directions/statistics/dashboards?annee=${year}` : `${environment.baseUrl}/api/directions/statistics/dashboards`;
  // Appeler l'API pour récupérer les statistiques
  return this.http.get(url ,{headers});
}
}
