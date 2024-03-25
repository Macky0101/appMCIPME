import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListUniteInsdustService {

  constructor(
    private http : HttpClient,
  ) { }

   // Méthode pour générer les en-têtes
 getHeaders(): HttpHeaders {
  const token = localStorage.getItem('accessToken'); // Récupérer le jeton du localStorage
  return new HttpHeaders().set('Authorization', `Bearer ${token}`); // Créer les en-têtes avec le jeton
}

getListUniteInsdust(): Observable<any>{
  const headers = this.getHeaders();
  return this.http.get(`${environment.baseUrl}/api/mcipme`, { headers });
}

getDetailIndustrie(CodeMpme: string): Observable<any> {
  const headers = this.getHeaders();
  return this.http.get(`${environment.baseUrl}/api/mcipme/${CodeMpme}`, { headers });
}
}
