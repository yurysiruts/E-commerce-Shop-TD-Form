import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../shared/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Getting the product id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      // console.log(routeParams);
      // console.log(routeParams.get('productId'));
      const productIdFromRoute = Number(routeParams.get('productId'));

    // Find certain product which matches the ID from route
      this.product = products.find(item => item.id === productIdFromRoute)
  };

}
