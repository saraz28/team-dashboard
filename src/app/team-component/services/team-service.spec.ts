import { TestBed } from '@angular/core/testing';

import { TeamService } from './team-service';
import { HttpClientModule } from '@angular/common/http';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
