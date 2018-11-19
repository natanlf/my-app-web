import { ClienteService } from './../../services/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../../model/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = { 
    email: "natan.developer@gmail.com",
    senha: "123"
  };

  constructor(public auth: ClienteService) { }

  ngOnInit() {
    this.login();
  }

  login(){
    this.auth.authenticate(this.creds).subscribe(response=>{
      console.log(response.headers.get('Authorization'));
    }, 
    error=>{

    })
  }
}
