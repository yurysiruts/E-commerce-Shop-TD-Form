import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProductListComponent } from './e-shop/product-list/product-list.component';
import { TopBarComponent } from './e-shop/top-bar/top-bar.component';
import { ProductAlertsComponent } from './e-shop/product-alerts/product-alerts.component';
import { ProductDetailComponent } from './e-shop/product-detail/product-detail.component';
import { ErrorMessageComponent } from './shared/error-message/error-message';

import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from '../shipping/shipping.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ComponentAComponent } from './exercise/component-a/component-a.component';
import { ComponentBComponent } from './exercise/component-b/component-b.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { DogAppComponent } from './dog-app/dog-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    ErrorMessageComponent,
    StartPageComponent,
    GalleryComponent,
    TdFormComponent,
    ComponentAComponent,
    ComponentBComponent,
    ExerciseComponent,
    DogAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
