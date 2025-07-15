import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filteration } from './filteration';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared-module';

describe('Filteration', () => {
  let component: Filteration;
  let fixture: ComponentFixture<Filteration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filteration],
      imports: [HttpClientModule,SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Filteration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
