import { TestBed } from '@angular/core/testing';

import { MusicsRepository } from './musics.repository';

describe('MusicsRepository', () => {
  let service: MusicsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
