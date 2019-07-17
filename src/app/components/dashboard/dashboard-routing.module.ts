import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from './phim/quan-ly-phim/quan-ly-phim.component';
import { ThemSuaPhimComponent } from './phim/them-sua-phim/them-sua-phim.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuanLyUserComponent } from './user/quan-ly-user/quan-ly-user.component';
import { ThemSuaUserComponent } from './user/them-sua-user/them-sua-user.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: '',
				redirectTo: 'qlphim',
				pathMatch: 'full'
			},
			{
				path: 'qlphim',
				children: [
					{
						path: '',
						component: QuanLyPhimComponent
					},
					{
						path: 'them',
						component: ThemSuaPhimComponent
					},
					{
						path: 'sua/:id',
						component: ThemSuaPhimComponent
					}
				]
			},
			{
				path: 'qluser',
				children: [
					{
						path: '',
						component: QuanLyUserComponent
					},
					{
						path: 'them',
						component: ThemSuaUserComponent
					},
					{
						path: 'sua/:id',
						component: ThemSuaUserComponent
					}
				]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
