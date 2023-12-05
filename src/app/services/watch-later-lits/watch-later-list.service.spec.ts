import { TestBed } from '@angular/core/testing';

import { WatchLaterListService } from './watch-later-list.service';

describe('WatchLaterListService', () => {
  let service: WatchLaterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(
      WatchLaterListService,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
