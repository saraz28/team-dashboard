import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TeamComponent } from './team-component';
import { TeamService } from './services/team-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../shared/shared-module';
import { Team } from './model/teeam';
import { of } from 'rxjs';
const mockTeams: Team[] = [
  {
    id: 1,
    name: 'Alic',
    role: 'Designer',
    email: 'test@gmail.com',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?u=admin@cafearoma.com',
    teamName: '',
    period: '',
    totalTasks: 0,
    completedTasks: 0,
    efficiencyRate: 0,
    avgResolutionTime: 0,
    satisfactionScore: 0,
    goalAchievementRate: 0,
    kpi: {
      id: 1,
      teamName: 'Alice',
      efficiencyRate: 80,
      avgResolutionTime: 90,
      satisfactionScore: 4,
      goalAchievementRate: 2.5,
    },
  },
  {
    id: 2,
    name: 'Bob',
    role: 'Designer',
    email: 'test@gmail.com',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?u=admin@cafearoma.com',
    teamName: '',
    period: '',
    totalTasks: 0,
    completedTasks: 0,
    efficiencyRate: 0,
    avgResolutionTime: 0,
    satisfactionScore: 0,
    goalAchievementRate: 0,
    kpi: {
      id: 1,
      teamName: 'Alice',
      efficiencyRate: 80,
      avgResolutionTime: 90,
      satisfactionScore: 4,
      goalAchievementRate: 2.5,
    },
  },
];
class MockTeamService {
  getTeam() {
    return of(mockTeams);
  }
}
describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [{ provide: TeamService, useClass: MockTeamService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load team data from service', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(component.teamData.length).toBe(2);
    expect(component.teamData).toEqual(mockTeams);
  }));
  it('should calculate performance indicator correctly', () => {
    const score = component.getPerformanceIndicator(mockTeams[0]);
    expect(score).toBe(54);
  });
});
