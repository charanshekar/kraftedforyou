import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjrakhComponent } from './ajrakh/ajrakh.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KhadiComponent } from './khadi/khadi.component';
import { MadhubaniComponent } from './madhubani/madhubani.component';
import { ProductsModule } from './products/products.module';
import { StoneWorkComponent } from './stone-work/stone-work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'traits',
    component: CardCarouselComponent
  },
  {
    path: 'ajrakh',
    component: AjrakhComponent
  },
  {
    path: 'khadi',
    component: KhadiComponent
  },
  {
    path: 'madhubani',
    component: MadhubaniComponent
  },
  {
    path: 'stone-work',
    component: StoneWorkComponent
  },
  {
    path: 'products',
    loadChildren: () => import('../app/products/products.module').then(x => x.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    }), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
