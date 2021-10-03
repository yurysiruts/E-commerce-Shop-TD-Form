import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public countryList = ['Angola', 'USA', 'China', 'Chech', 'Morocco'];
  public submitted = false;
  
  public contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      isMarried: new FormControl(),
      addressData: new FormGroup({
        address: new FormControl(null, [Validators.required]),
        postCode: new FormControl(null, [Validators.required]),
      })
    });
  }

  onSubmit() {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset(); 
      this.submitted = false;
    } else {
      this.submitted = true;
      this.checkInputValidity(this.contactForm);
    }
  }

  checkInputValidity(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field); 
      if (control instanceof FormControl) { 
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {   
        this.checkInputValidity(control);  
      }
    });
  }

  isFieldValid(field: string) {
    return !this.contactForm.get(field).valid && this.contactForm.get(field).touched;
  }

  displayErrorMessage(field: string) {
    if(this.submitted) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field),
      }
    }
  }

  displayRedBorder(field: string) {
    if(this.submitted) {
      return {
        'giveRedBorder': this.isFieldValid(field),
      }
    }
  }


}
