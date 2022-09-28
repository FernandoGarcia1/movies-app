import { TestBed } from '@angular/core/testing';

import { TmdbResolver } from './tmdb.resolver';

describe('TmdbResolver', () => {
  let resolver: TmdbResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TmdbResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
