import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../../../shared/services/quan-ly-phim.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detail-phim',
  templateUrl: './detail-phim.component.html',
  styleUrls: ['./detail-phim.component.css']
})
export class DetailPhimComponent implements OnInit {
	phim: any = null;
	idPhim: any = null;

	getPhimByid() {
		this.idPhim = this.route.snapshot.paramMap.get('id');
		this.quanLyPhimService.getPhimById(this.idPhim).subscribe(res => {
			this.phim = res;
			console.log(res);
		})
	}

	back() {
		this.location.back();
	}

  constructor(
  	public route: ActivatedRoute,
  	public quanLyPhimService: QuanLyPhimService,
  	public location: Location
  	) { }


  ngOnInit() {
  	this.getPhimByid();
  }

}
