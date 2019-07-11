import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHotelComponent } from './tarjeta-hotel.component';

describe('TarjetaHotelComponent', () => {
  let component: TarjetaHotelComponent;
  let fixture: ComponentFixture<TarjetaHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
