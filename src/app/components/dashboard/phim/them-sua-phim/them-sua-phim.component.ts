import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuanLyPhimService } from '../../../../shared/services/quan-ly-phim.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { forBiddenNameValidator } from '../../../../shared/directive/forbidden-name.directive';

// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-them-sua-phim',
  templateUrl: './them-sua-phim.component.html',
  styleUrls: ['./them-sua-phim.component.css']
})
export class ThemSuaPhimComponent implements OnInit {
  idPhim: any = null;
  phim: any = null;
  detailPhimForm: FormGroup;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private quanLyPhimService: QuanLyPhimService,
  	private fb: FormBuilder
  ) { }

  ngOnInit() {
  	this.getPhimById();
  	this.createFormPhim();
  }

  createFormPhim() {
  	this.detailPhimForm = this.fb.group({
  		name: ['', [Validators.required]],
  		image: ['', [Validators.required]],
  		theLoai: [1],
  		hangSanXuat: [''],
  		ngayChieu: ['', [Validators.required]],
  		daoDien: [''],
  		dienVien: [''],
  		description: ['', [Validators.required]],
  		price: ['', [Validators.required]],
  		rating: [''],
  	})
  }

  getPhimById() {
  	this.idPhim = this.route.snapshot.paramMap.get('id');
  	if(this.idPhim) {
  		this.quanLyPhimService.getPhimById(this.idPhim).subscribe(res => {
  		this.phim = res;
  		this.pathValueForm(res);
  	});
  	}
  }

  pathValueForm(data: any) {
  	const phim = this.phim;
  	this.detailPhimForm.patchValue({
  		name: data.name,
  		image: data.image,
  		theLoai: data.theLoai,
  		hangSanXuat: data.hangSanXuat,
  		ngayChieu: data.ngayChieu,
  		daoDien: data.daoDien,
  		dienVien: data.dienVien,
  		description: data.description,
  		price: data.price,
  		rating: data.rating,
  	})
  }

  //update
  updatePhim(formValue: any) {
    console.log(this.detailPhimForm);
    if(confirm("cập nhập phim?")) {
      this.quanLyPhimService.updatePhimById(formValue, this.idPhim).subscribe(res => this.location.back());
    }
  }

  //add
  addPhim(formValue: any) {
    if(confirm("Thêm phim này?")) {
      this.quanLyPhimService.addPhim(formValue).subscribe(res => this.location.back());
    }
  }

  goBack() {
    if(this.idPhim) {
      if(confirm("Hủy sửa?")) {
        this.location.back();
        return;
      }
    }

    if(!this.idPhim) {
     if(confirm("Hủy Thêm?")) {
        this.location.back();
        return;
      }
    }
    
  }

  //image
  selectedFile: any = null;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = event.target.result;
      this.detailPhimForm.get('image').setValue(event.target.result);
      // this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

}
