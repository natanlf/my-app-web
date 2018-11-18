import { CategoriaDTO } from './../../model/categoria.dto';
import { CategoriaService } from './../../services/categoria/categoria.service';
import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from '../../services/config/api.config';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  itens: CategoriaDTO[];
  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.categoriaService.findAll()
      .subscribe(response =>{ //com arrow function, declarei uma função dentro de outra
        this.itens = response;
      },
    error => {
      console.log(error);
    });
  }

}
