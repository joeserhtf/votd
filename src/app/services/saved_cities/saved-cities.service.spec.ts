import { TestBed } from '@angular/core/testing';

import { SavedCitiesService } from './saved-cities.service';

describe('SavedCitiesService', () => {
  let service: SavedCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
