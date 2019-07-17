import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { QuanLyPhimComponent } from './phim/quan-ly-phim/quan-ly-phim.component';
import { QuanLyUserComponent } from './user/quan-ly-user/quan-ly-user.component';
import { ThemSuaPhimComponent } from './phim/them-sua-phim/them-sua-phim.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemSuaUserComponent } from './user/them-sua-user/them-sua-user.component';

@NgModule({
  declarations: [
	QuanLyPhimComponent, 
	QuanLyUserComponent, 
	ThemSuaPhimComponent, 
	DashboardComponent, ThemSuaUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
