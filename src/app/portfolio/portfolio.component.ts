import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  alldiv: boolean;
  webdiv: boolean;
  logodiv: boolean;
  webdesdiv: boolean;
  mobilediv: boolean;
  loaddiv: boolean;
  imagezoom: any;
  constructor() { }

  ngOnInit() {

  this.alldiv = true;
  this.webdiv = false;
  this.logodiv = false;
  this.webdesdiv = false;
  this.mobilediv = false;
  this.loaddiv = false;


  }

    divclicks(val) {
      console.log(val);
      if (val === 'all') {
        this.alldiv = true;
        this.webdiv = false;
        this.logodiv = false;
        this.webdesdiv = false;
        this.mobilediv = false;
        this.loaddiv = false;


      } else  if ( val === 'webdev') {
        this.alldiv = false;
        this.webdiv = true;
        this.logodiv = false;
        this.webdesdiv = false;
        this.mobilediv = false;
        this.loaddiv = false;


      } else  if ( val === 'logo') {
        this.alldiv = false;
        this.webdiv = false;
        this.logodiv = true;
         this.webdesdiv = false;
          this.mobilediv = false;
          this.loaddiv = false;


      } else  if ( val === 'webdesign') {
        this.alldiv = false;
        this.webdiv = false;
        this.logodiv = false;
        this.webdesdiv = true;
        this.mobilediv = false;
        this.loaddiv = false;


      } else  if ( val === 'mobdiv') {
        this.alldiv = false;
        this.webdiv = false;
        this.logodiv = false;
        this.webdesdiv = false;
        this.mobilediv = true;
        this.loaddiv = false;


      } else  if ( val === 'load') {
        this.alldiv = true;
        this.webdiv = false;
        this.logodiv = false;
        this.webdesdiv = false;
        this.mobilediv = false;
        this.loaddiv = true;


      }



    }

    imagezooom(val) {
     this.imagezoom = val ;
     document.getElementById('zoomclick').click();
    }

}
