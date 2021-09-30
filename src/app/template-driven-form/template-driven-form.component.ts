import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  countryList:country[] = [
    new country("1", "Angola"),
    new country("2", "Belgium"),
    new country("3", "China"),
  ];

  constructor() {}

  onSubmit(contactForm) {
    console.log(contactForm.value)
  }

}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
