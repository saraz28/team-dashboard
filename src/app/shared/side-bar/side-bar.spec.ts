import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBar } from './side-bar';
import { SharedModule } from '../shared-module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SideBar', () => {
  let component: SideBar;
  let fixture: ComponentFixture<SideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBar],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
