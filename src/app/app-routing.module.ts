import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './e-shop/product-list/product-list.component';
import { ProductDetailComponent } from './e-shop/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from '../shipping/shipping.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TopBarComponent } from './e-shop/top-bar/top-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { DogAppComponent } from './dog-app/dog-app.component';


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
  { path: 'gallery', component: GalleryComponent},
  { path: 'tdform', component: TdFormComponent},
  { path: 'exercise', component: ExerciseComponent},
  { path: 'dog-api', component: DogAppComponent},
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
