import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AdsComponent } from 'src/app/shared/components/ads/ads.component';
import { QuickCategoriesComponent } from 'src/app/shared/components/quick-categories/quick-categories.component';
import { BrandCardComponent } from 'src/app/shared/components/brand-card/brand-card.component';
import { CardComponent } from 'src/app/shared/components/common/card/card.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AdsComponent,
    QuickCategoriesComponent,
    BrandCardComponent,
    CardComponent
  ],
})
export class HomeModule {}
