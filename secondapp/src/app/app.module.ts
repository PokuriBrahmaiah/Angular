import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MarketingComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
