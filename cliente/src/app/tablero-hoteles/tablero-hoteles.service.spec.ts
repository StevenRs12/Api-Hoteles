import { TestBed } from '@angular/core/testing';

import { TableroHotelesService } from './tablero-hoteles.service';

describe('TableroHotelesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableroHotelesService = TestBed.get(TableroHotelesService);
    expect(service).toBeTruthy();
  });
});
