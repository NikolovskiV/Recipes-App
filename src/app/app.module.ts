import { ComponentservicesService } from './componentservices.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRecepiesComponent } from './add-recepies/add-recepies.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    AddRecepiesComponent,
    HeaderComponent,
    RecipeComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ComponentservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
