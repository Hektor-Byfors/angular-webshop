import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AdminComponent,
    NotfoundComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
