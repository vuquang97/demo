import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaUserComponent } from './them-sua-user.component';

describe('ThemSuaUserComponent', () => {
  let component: ThemSuaUserComponent;
  let fixture: ComponentFixture<ThemSuaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemSuaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSuaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
