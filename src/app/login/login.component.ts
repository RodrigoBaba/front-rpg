import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserCredentialsDTO } from '../model/UserCredentialsDTO';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLoginDTO = new UserLoginDTO
  userCredential: UserCredentialsDTO = new UserCredentialsDTO

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  

  login(){
    this.authService.login(this.userLogin).subscribe({
      next: (resp: UserCredentialsDTO) => {

        environment.email = resp.email
        environment.id = resp.id
        environment.basicToken = resp.basicToken
        environment.user = resp.user

        console.log(environment)

        this.router.navigate(["/home-page"])
        
      },
      error: erro => {
        if(erro.status == 400){
          alert("Usuário Inexistente! Por favor crie uma conta.")
        } else if (erro.status == 401){
          alert("Senha Inválida!")
        }
      }
    })
  }


}
