import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  given_name: AbstractControl;
  family_name: AbstractControl;
  address: AbstractControl;
  address2: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zip: AbstractControl;
  
  constructor(public auth: AuthService, 
     fb: FormBuilder,
     private http: HttpClient,
     private router: Router) {

    
    this.profileForm = fb.group({
      'given_name': ['', Validators.required],
      'family_name': ['', Validators.required],
      'address': ['', Validators.required],
      'address2': ['',],
      'city': ['', Validators.required],
      'state': ['', Validators.required],
      'zip': ['', Validators.required],
      'sub': ['', Validators.required],
    });
    
    this.given_name = this.profileForm.controls['given_name'];
    this.family_name = this.profileForm.controls['family_name'];
    this.address = this.profileForm.controls['address'];
    this.address2 = this.profileForm.controls['address2'];
    this.city = this.profileForm.controls['city'];
    this.state = this.profileForm.controls['state'];
    this.zip = this.profileForm.controls['zip'];

    http.get<any>(env.apiUri + "/api/profile").subscribe(profile => {
      console.log(profile);
      this.given_name.setValue(profile["given_name"]);
      this.family_name.setValue(profile["family_name"]);
      this.address.setValue(profile["address"] );
      this.address2.setValue(profile["address2"] );
      this.city.setValue(profile["city"] );
      this.state.setValue(profile["state"] );
      this.zip.setValue(profile["zip"] );
    });

    auth.user$.subscribe(usr => {
      this.profileForm.controls['sub'].setValue(usr["sub"]);
    })
   }

  ngOnInit(): void {


  }


  onSubmit(): void { 
    
    console.log('you submitted value: ', this.profileForm.value);
    this.http.post<any>(env.apiUri + "/api/profile", this.profileForm.value).subscribe(resp =>
      this.router.navigate(["home"])
      );
    

  }
}
