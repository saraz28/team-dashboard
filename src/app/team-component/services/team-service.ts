import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team, TeamKPI } from '../model/teeam';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  constructor(private http: HttpClient) {}


  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>('/assets/mock/kapiTeamApi.json');
  }

}
