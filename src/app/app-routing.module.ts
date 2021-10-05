import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: StartPageComponent },
  { path: 'hero', component: HeroFormComponent },
  { path: 'rform', component: ReactiveFormComponent },
  { path: 'rforms', component: ReactiveFormsComponent },
  { path: 'td-form', component: TemplateDrivenFormComponent },
  { path: 'products', 
    component: TopBarComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
      
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
