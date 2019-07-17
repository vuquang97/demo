import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QlUserService } from '../../../../shared/services/ql-user.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forBiddenNameValidator } from '../../../../shared/directive/forbidden-name.directive';

@Component({
  selector: 'app-them-sua-user',
  templateUrl: './them-sua-user.component.html',
  styleUrls: ['./them-sua-user.component.css']
})
export class ThemSuaUserComponent implements OnInit {
  idUser: any = null;
  themUserForm: FormGroup;
  User: any = null;
  constructor(
  	public fb: FormBuilder,
  	public qlUserService: QlUserService,
  	public location: Location,
  	public route: ActivatedRoute
  	) { }

  createForm() {
  	this.themUserForm = this.fb.group({
  		txtHoTen: ['', [Validators.required]],
  		txtUsername: ['', [Validators.required, forBiddenNameValidator(/admin/i)]],
  		txtPassword: ['', [Validators.required, Validators.minLength(6)]],
  		txtDiaChi: [''],
  		txtPhone: ['']
  	});
  }

  getUserById() {
  	this.idUser = this.route.snapshot.paramMap.get('id');
  	this.qlUserService.getUserById(this.idUser).subscribe(res => {
  		this.User = res;
  		this.pathValueUser(res);
  	});
  }

  pathValueUser(value: any) {
  	this.themUserForm.patchValue({
  		txtHoTen: value.txtHoTen,
  		txtUsername: value.txtUsername,
  		txtPassword: value.txtPassword,
  		txtDiaChi: value.txtDiaChi,
  		txtPhone: value.txtPhone,
  	});
  }


  addUser(value: any) {
        console.log(this.themUserForm);
  	if(confirm("Thêm user?")) {
  		value.gioPhim = [];
	  	value.maQuyenHan = 1;
	  	value.viTien = 0;
	  	this.qlUserService.addUser(value).subscribe(res => {
	  		console.log(res);
	  		this.location.back();
	  	});
  	}
  }

  updateUser(value: any)  {
    console.log(this.themUserForm);
  	if(confirm("Sửa thông tin")) {
  		if(this.User) {
  			value.gioPhim = this.User.gioPhim;
	  		value.maQuyenHan = this.User.maQuyenHan;
	  		value.viTien = this.User.viTien;
  		}
  		this.qlUserService.updateUser(this.idUser, value).subscribe(res => {
  			this.location.back();
  		});
  	}
  }

  goBack() {
  	if(confirm("Hủy bỏ sửa")) {
  		this.location.back();
  	}
  }

  ngOnInit() {
  	this.createForm();
  	this.getUserById();
  }

}
