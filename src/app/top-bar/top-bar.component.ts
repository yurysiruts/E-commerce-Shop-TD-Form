import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  onCart() {
    this.router.navigate(['cart'], {relativeTo: this.route})
  }
}
