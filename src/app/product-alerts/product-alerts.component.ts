import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../shared/products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() recievedProduct!: Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
