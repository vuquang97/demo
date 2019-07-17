import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhimComponent } from './detail-phim.component';

describe('DetailPhimComponent', () => {
  let component: DetailPhimComponent;
  let fixture: ComponentFixture<DetailPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
