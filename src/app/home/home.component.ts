import { Component, OnInit } from '@angular/core';
import {  FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupform: FormGroup;
  Name: any;
  Email: any;
  emailRegex;
  PhoneNumber: any;
  constructor(private formBuilder: FormBuilder, private router: Router ) {
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 }

  ngOnInit() {
    const elem = localStorage.getItem('portpage');
    if(elem != ''){
      document.getElementById('port').click();
      localStorage.clear();
    }
    this.registrationForm();
    
}
registrationForm() {
  this.signupform = this.formBuilder.group({
    Name: ['', [Validators.required]],
    PhoneNumber: ['', [Validators.required , Validators.minLength(10), Validators.maxLength(10)]],
    Email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern(this.emailRegex)]],

  });
}
onSubmit() {
  console.log(this.signupform);
 if (this.signupform.valid === false) {
   alert('Please Enter All Fields ');
  }  else {
     alert('your Registration is successfully completed');
  }

}



}
