import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CategoriaDTO } from '../../model/categoria.dto';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http: HttpClient) { }

  findAll() : Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
  }

}
