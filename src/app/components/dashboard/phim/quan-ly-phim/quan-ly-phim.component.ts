import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../../../../shared/services/quan-ly-phim.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
	listPhim: any = [];

  constructor(
    public quanLyPhimService: QuanLyPhimService,
    private router: Router,
    public location: Location
   ) { }

  getPhimAll() {
  	this.quanLyPhimService.getPhimAll().subscribe(res => {
  		this.listPhim = res;
  		// console.log(res);
  	});
  }

  editPhim(id: any) {
    this.router.navigate(['/dashboard/qlphim/sua/'+ id]);
  }

  addPhim() {
    this.router.navigate(['/dashboard/qlphim/them']);
  }

  deletePhim(id: any) {
    if(confirm('Xóa phim này')) {
      this.quanLyPhimService.deletePhim(id).subscribe(res => {
        const index = this.listPhim.findIndex(res => res.id  == id);
        this.listPhim.splice(index, 1);
      });
    }
    
  }

  // back() {
  //   this.location.back();
  // }

  ngOnInit() {
  	this.getPhimAll();
  }

}
