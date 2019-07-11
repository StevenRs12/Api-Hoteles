import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroHotelesComponent } from './tablero-hoteles.component';

describe('TableroHotelesComponent', () => {
  let component: TableroHotelesComponent;
  let fixture: ComponentFixture<TableroHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
