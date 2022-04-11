import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CharacterModel } from '../model/CharacterModel';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  remote = "https://rpg-nefelus.herokuapp.com"
  local = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  basicToken = {
    headers: new HttpHeaders().set('Authorization', environment.basicToken),
  };

  refreshToken() {
    this.basicToken = {
      headers: new HttpHeaders().set('Authorization', environment.basicToken),
    };
  }

  getIdCharacter(id: number): Observable<CharacterModel>{
    return this.http.get<CharacterModel>(`${this.local}/character/id/${id}`, this.basicToken);
  }

}
