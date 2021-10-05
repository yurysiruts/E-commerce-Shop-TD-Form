import { Component, OnInit } from '@angular/core';

import { OnStart } from '../shared/on-start';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private startPage: OnStart) {}

  public sexes = ["male", "female"];
    
  public forbiddenUserNames = ['Chris', 'Anna'];
  public accountStatuses = ['Deafault', 'Premium', 'Gold']

  // Property which will hold our form, don't forget to import 'ReactiveFormsModule' in app.module.ts
  public signupForm: FormGroup;

  ngOnInit() {
    // Initializing form before rendering it in the template (lifecycle hook is usefull for this!)
    //  this.signupForm = new FormGroup({}) - like this we create simple form, without any controls
    //  controls are key-value pairs
    this.signupForm = new FormGroup({
      // here we use nesting for our Controls, in new FormGroup which also takes a JS object
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'sex': new FormControl('male'),
      'hobbies': new FormArray([]),
      'accountStatus': new FormControl('Deafault', Validators.required)
    });
    //  'username': new FormControl(initial value, single/array of Validators, ASYNC validators)
    // new FormControl() - constructor with 3 potential arg's
  }
  // We configurating the hole form in the .ts file, 
  // that's why we should maintain all kind of validation here!

  onSubmit() {
    // gaining access to the form 
    console.log(this.signupForm);
    // this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Custom Validator
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }


  // ASYNC CUSTOM VALIDATORS
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // Go on /start page
  onStart() {
    this.startPage.onStart();
  }


}
