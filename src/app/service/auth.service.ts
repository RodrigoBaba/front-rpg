import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserCredentialsDTO } from '../model/UserCredentialsDTO';
import { UserLoginDTO } from '../model/UserLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  remote = "https://rpg-nefelus.herokuapp.com"
  local = "http://localhost:8080"

  constructor(
    private http: HttpClient,
    public router: Router

  ) { }

  basicToken = {
    headers: new HttpHeaders().set('Authorization', environment.basicToken),
  };

  refreshToken() {
    this.basicToken = {
      headers: new HttpHeaders().set('Authorization', environment.basicToken),
    };
  }

  getIdUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.local}/user/get/${id}`, this.basicToken);
  }

  login(userLogin: UserLoginDTO): Observable<UserCredentialsDTO> {
    return this.http.post<UserCredentialsDTO>(this.local + "/user/login", userLogin);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.local + "/user/register", user);
  }

  createCharacter(user: User): Observable<User> {
    return this.http.put<User>(this.local + "/user/character", user, this.basicToken);
  }

  online() {
    let ok: boolean = false;

    if (environment.basicToken != "") {
      ok = true;
    }
    return ok;
  }
}
