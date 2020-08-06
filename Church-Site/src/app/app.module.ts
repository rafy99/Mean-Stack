import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChurchMoreInfoComponent } from './church-more-info/church-more-info.component';
import { PopeKyrollosInfoComponent } from './pope-kyrollos-info/pope-kyrollos-info.component';
import { OurfathersinfoComponent } from './ourfathersinfo/ourfathersinfo.component';
import { RequestsComponent } from './requests/requests.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { TodayliveComponent } from './todaylive/todaylive.component';
import { CarouselHomepageComponent } from './homepage/carousel-homepage/carousel-homepage.component';
import { ChurchVisionHomepageComponent } from './homepage/church-vision-homepage/church-vision-homepage.component';
import { LiveIntroComponent } from './homepage/live-intro/live-intro.component';
import { AccordionHomepageComponent } from './homepage/accordion-homepage/accordion-homepage.component';
import { TestimonialsHomepageComponent } from './homepage/testimonials-homepage/testimonials-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ChurchMoreInfoComponent,
    PopeKyrollosInfoComponent,
    OurfathersinfoComponent,
    RequestsComponent,
    OnlinepaymentComponent,
    TodayliveComponent,
    CarouselHomepageComponent,
    ChurchVisionHomepageComponent,
    LiveIntroComponent,
    AccordionHomepageComponent,
    TestimonialsHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
