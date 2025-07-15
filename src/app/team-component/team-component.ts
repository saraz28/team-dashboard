import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team-service';
import { combineLatest } from 'rxjs';
import { Team } from './model/teeam';

@Component({
  selector: 'app-team-component',
  standalone: false,
  templateUrl: './team-component.html',
  styleUrl: './team-component.scss',
})
export class TeamComponent implements OnInit {
  teamData: Team[] = [];

  constructor(private teamService: TeamService) {}
  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.teamService.getTeam().subscribe((data) => {
      console.log('data', data);
      this.teamData = data;
    });
  }

  getPerformanceIndicator(member: Team): number {
    const { efficiencyRate, goalAchievementRate, satisfactionScore } =
      member.kpi;
    const score =
      (efficiencyRate + goalAchievementRate + satisfactionScore * 20) / 3;
    return Math.round(score);
  }

  onFiltered(filteredTeams: Team[]) {
    this.teamData = filteredTeams;
  }
}
