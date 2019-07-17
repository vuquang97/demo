import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailPhimComponent } from './detail-phim/detail-phim.component';

@NgModule({
  declarations: [HomeComponent, HomepageComponent, DetailPhimComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomepageModule { }
