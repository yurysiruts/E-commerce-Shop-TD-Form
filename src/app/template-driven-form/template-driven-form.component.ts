import { Component } from '@angular/core';
import { OnStart } from '../shared/on-start';

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

  constructor(private startPage: OnStart) {}

  onSubmit(contactForm) {
    console.log(contactForm.value)
  }

  onStart() {
    this.startPage.onStart();
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
