import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User;
  confirmPass: string;
  verification: boolean;



  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmPassword(event: any) {
    this.confirmPass = event.target.value;
  }

  register() {

    if(this.verification == true){
      if (this.user.password != this.confirmPass) {
        alert("Senhas diferentes!")
      } else {
        this.authService.register(this.user).subscribe({
          next: (resp: User) => {
            this.user = resp;
            this.router.navigate(["/login"]);
            alert("Usuário cadastrado com sucesso!");
          },
          error: erro => {
            if (erro.status == 401) {
              alert("Usuário ou senha inválidos! Por favor cria uma conta.")
            } else if (erro.status == 400) {
              alert("Usuário ou Email Existente!")
            }
          }
        })
      }
    } else {
      alert("Campo de termos é obrigatório!")
    }     
        
  }

  validEmail() {
    if (this.user.email.indexOf("@") != -1 && this.user.email.indexOf(".") != -1) {
      let email = (<HTMLDivElement>document.getElementById('email'))
      // email.innerHTML = (255 - this.user.email.length).toString()
      email.innerHTML = "Email válido"
      email.style.color = "green"
    } else {
      let email = (<HTMLDivElement>document.getElementById('email'))
      email.innerHTML = 'Email inválido! É necessário @ e .'
      email.style.color = "red"
    }
  }

  validUser() {
    if (this.user.user.length < 3) {
      let name = (<HTMLDivElement>document.getElementById('user'))
      // email.innerHTML = (255 - this.user.email.length).toString()
      name.innerHTML = "Mínimo 3 caracteres!"
      name.style.color = "red"
    } else {
      let name = (<HTMLDivElement>document.getElementById('user'))
      name.innerHTML = ''
    }
  }

  validPassword() {
    if (this.confirmPass.length < 6) {
      let password = (<HTMLDivElement>document.getElementById('password'))
      // email.innerHTML = (255 - this.user.email.length).toString()
      password.innerHTML = "Mínimo 6 caracteres!"
      password.style.color = "red"
    } else {
      let password = (<HTMLDivElement>document.getElementById('password'))
      password.innerHTML = ''
    }
  }

  validConfPassword() {
    if (this.user.password.length < 6) {
      let confirPassword = (<HTMLDivElement>document.getElementById('confirmPass'))
      // email.innerHTML = (255 - this.user.email.length).toString()
      confirPassword.innerHTML = "Mínimo 6 caracteres!"
      confirPassword.style.color = "red"
    } else {
      let confirPassword = (<HTMLDivElement>document.getElementById('confirmPass'))
      confirPassword.innerHTML = ''
    }
  }

  validCheckBox(){
    let warning = (<HTMLSpanElement>document.getElementById('warning'))
    let check = (<HTMLInputElement>document.getElementById('checkBox'))

    if(check.checked){
      warning.innerHTML = ""
      this.verification = true
      console.log("MARCADO")
    } else {
      warning.innerHTML = "Campo obrigatório"
      warning.style.color = "red"
      this.verification = false
      console.log("DESMARCADO")
    }
  }
}
