import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloonexplore',
  templateUrl: './balloonexplore.component.html',
  styleUrls: ['./balloonexplore.component.css']
})
export class BalloonexploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   public rediriecting(){
     localStorage.setItem('portpage' ,'portfolio');
   }
}
