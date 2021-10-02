import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public countryList = ['Angola', 'USA', 'China', 'Chech', 'Morocco'];

  public contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      isMarried: new FormControl(),
      addressData: new FormGroup({
        address: new FormControl(),
        postCode: new FormControl(),
      })
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
