import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user = environment.user

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    // if(environment.basicToken == ""){
    //   this.router.navigate(["/login"])
    //   alert("Logue novamente!")
    // }
  }

}
