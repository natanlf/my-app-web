import { CategoriaService } from './../../services/categoria/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.findAll()
      .subscribe(response =>{ //com arrow function, declarei uma função dentro de outra
        console.log(response); //tenho duas funções dentro da função subscribe, a response e a error
      },
    error => {
      console.log(error);
    });
  }

}
