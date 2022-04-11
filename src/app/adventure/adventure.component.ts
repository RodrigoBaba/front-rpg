import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  random(){
    let die = Math.floor(Math.random() * 20 + 1)
    console.log(die)  
    return die  
  }

}
