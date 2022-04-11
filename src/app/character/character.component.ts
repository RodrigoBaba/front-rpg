import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CharacterModel } from '../model/CharacterModel';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  user: User = new User();
  idUser = environment.id;

  character: CharacterModel = new CharacterModel();

  race: string = '';
  vocation: string;
  gender: string;

  constructor(
    private authService: AuthService,
    private router : Router,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.authService.refreshToken();

    if(environment.basicToken == ""){
      this.router.navigate(["/login"])
    }

    this.getIdUser(this.idUser);
  }

  choiceGender(event: any){
    this.gender = event.target.value;
  }

  choiceRace(event: any){
    this.race = event.target.value;
    (<HTMLOptionElement>document.getElementById('vocation')).value = 'escolha'
    this.vocation = ''    
  }

  choiceVocation(event: any){
    this.vocation = event.target.value;
  }

  createCharacter(){
    this.character.gender = this.gender
    this.character.race = this.race
    this.character.vocation = this.vocation

    this.user.characterModel = this.character

    this.authService.createCharacter(this.user).subscribe((
      resp: User) => {
        this.user = resp;
        this.router.navigate(["/home-page"])
        alert("Personagem criado com sucesso!")
      })
  }

  getIdUser(id: number){
    this.authService.getIdUser(id).subscribe((resp: User) => {
      this.user = resp;
      if(this.user.characterModel != null){
        this.character = resp.characterModel
      }
    })
  }    
}
