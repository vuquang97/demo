import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../../../shared/services/quan-ly-phim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  listPhim: any = [];

  getAllPhim() {
  	this.quanLyPhimService.getPhimAll().subscribe(res => {
  		this.listPhim = res;
  		console.log(res);
  	});
  }

  detailPhim(value: any) {
    this.router.navigate(['/detail-phim/' + value.id]);
  }
  constructor(
    public quanLyPhimService: QuanLyPhimService,
    public router: Router
    ) { }

  ngOnInit() {
  	this.getAllPhim();
  }

}
