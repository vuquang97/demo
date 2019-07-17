import { Component, OnInit } from '@angular/core';
import { QlUserService } from '../../../../shared/services/ql-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly-user',
  templateUrl: './quan-ly-user.component.html',
  styleUrls: ['./quan-ly-user.component.css']
})
export class QuanLyUserComponent implements OnInit {

  constructor(
  	public qlUserService: QlUserService,
  	public router: Router
  ) { }

  listUser: any = [];
  idUser: any = null;

  getAllUser() {
  	this.qlUserService.getAllUser().subscribe(res => {
  		console.log(res);
  		const index = res.findIndex(res => res.maQuyenHan == 0);
  		res.splice(index, 1);
  		this.listUser = res;
  	});
  }

  addUser() {
  	this.router.navigate(['/dashboard/qluser/them']);
  }

  editUser(id: any) {
  	this.router.navigate(['/dashboard/qluser/sua/' + id]);
  }

  deleteUser(id: any) {
  	if(confirm("Xóa user này?")) {
  		this.qlUserService.deleteUser(id).subscribe(res => {
  			const index = this.listUser.findIndex(it => it.id == id);
  			this.listUser.splice(index, 1);
  		});
  	}
  }

  ngOnInit() {
  	this.getAllUser();
  }

}
