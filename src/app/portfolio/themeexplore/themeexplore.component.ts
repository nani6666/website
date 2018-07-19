import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeexplore',
  templateUrl: './themeexplore.component.html',
  styleUrls: ['./themeexplore.component.css']
})
export class ThemeexploreComponent implements OnInit {

  details: boolean;
  features: boolean;
  starts: boolean;
  additional: boolean;
  constructor() { }

  ngOnInit() {
    this.details = true;
    this.features = false;
    this.starts = false;
    this.additional = false;
  }
  divclicks(val) {

    if (val === 'details') {
      this.details = true;
      this.features = false;
      this.starts = false;
      this.additional = false;

    } else if (val === 'features') {
      this.details = false;
      this.features = true;
      this.starts = false;
      this.additional = false;


    } else if (val === 'starts') {
      this.details = false;
      this.features = false;
      this.starts = true;
      this.additional = false;
    } else if (val === 'additional') {
      this.details = false;
      this.features = false;
      this.starts = false;
      this.additional = true;
    }
  }

}
