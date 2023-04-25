import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { PagesComponent } from './pages/pages.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { FormsModule } from '@angular/forms';
import { PricePipe } from './pipes/price.pipe';
import { SliderPipe } from './pipes/slider.pipe';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { CommonComponent } from './common/common.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PageComponent } from './page/page.component';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { ContactComponent } from './pages/categorys/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PagesComponent,
    TypefilterPipe,
    PricePipe,
    SliderPipe,
    HomeComponent,
    ComplaintComponent,
    CommonComponent,
    MenuBarComponent,
    PageComponent,
    CategorysComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }