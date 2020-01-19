import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  headers: HttpHeaders;

  /* istanbul ignore next */
  constructor(
    private http: HttpClient) {
  }

  // getInfoCard(): Observable<any> {
  //   const user_data = this.cacheService.get(this.cacheService.constants.USER_DATA);
  //   return this.http.get<any>(environment.infoCard(user_data.dni, user_data.loggedId), { headers: this.setHeader() });
  // }

  // getStates(): Observable<any> {
  //   return this.http.get<any>(environment.contact.state).pipe(
  //     map((data) => {
  //       this.setTrackId(data.trackId);
  //       const retorno = [];
  //       data.forEach((element) => {
  //         retorno.push({
  //           id: element.state_id,
  //           text: `${this.normalizeService.capitalizeText(element.state_name)}`,
  //         });
  //       });
  //       return retorno;
  //     }));
  // }
}
