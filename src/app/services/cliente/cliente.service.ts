import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../../model/credenciais.dto';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public http: HttpClient) { }

  authenticate(creds : CredenciaisDTO) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/login`, 
        creds,
        {
            observe: 'response',
            responseType: 'text' //uso text pois não tenho corpo só header, assim não terei erro de parse json
        });
  }
}
