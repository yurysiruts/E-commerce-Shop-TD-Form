import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnStart } from '../shared/on-start';

import { Hero } from '../shared/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  constructor(private router: Router, private startPage: OnStart) {}

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  createNewHero() {
    this.model = new Hero(42, '', '');
  }

  onStart() {
    this.startPage.onStart();
  }
}

const myHero =  new Hero(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');

console.log('My hero is called ' + myHero.name);
