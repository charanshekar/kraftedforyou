import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { TraitsListComponent } from './traits-list/traits-list.component';
import { AjrakhComponent } from './ajrakh/ajrakh.component';
import { KhadiComponent } from './khadi/khadi.component';
import { MadhubaniComponent } from './madhubani/madhubani.component';
import { StoneWorkComponent } from './stone-work/stone-work.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CardCarouselComponent,
    TraitsListComponent,
    AjrakhComponent,
    KhadiComponent,
    MadhubaniComponent,
    StoneWorkComponent,
    WardrobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
