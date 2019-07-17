import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { DetailPhimComponent } from './components/homepage/detail-phim/detail-phim.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
	{
		path: 'homepage',
		component: HomeComponent
	},
	{
		path: 'detail-phim/:id',
		component: DetailPhimComponent
	},
	{
		path: 'dashboard',
		loadChildren: './components/dashboard/dashboard.module#DashboardModule'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
