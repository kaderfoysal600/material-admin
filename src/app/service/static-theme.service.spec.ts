import { TestBed } from '@angular/core/testing';

import { StaticThemeService } from './static-theme.service';

describe('StaticThemeService', () => {
  let service: StaticThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
