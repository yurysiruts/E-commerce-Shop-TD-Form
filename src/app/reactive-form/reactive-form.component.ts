import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public sexes = ["male", "female"];
  
  // Property which will hold our form, don't forget to import 'ReactiveFormsModule' in app.module.ts
  public signupForm: FormGroup;

  ngOnInit() {
    // Initializing form before rendering it in the template (lifecycle hook is usefull for this!)
    //  this.signupForm = new FormGroup({}) - like this we create simple form, without any controls
    //  controls are key-value pairs
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'sex': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    //  'username': new FormControl(initial value, single/array of Validators, ASYNC validators)
    // new FormControl() - constructor with 3 potential arg's
  }

  onSubmit() {
    // gaining access to the form 
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }


}
