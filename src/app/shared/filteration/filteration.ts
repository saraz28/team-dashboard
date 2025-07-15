import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TeamService } from '../../team-component/services/team-service';
import { Team } from '../../team-component/model/teeam';

interface Status {
  name: string;
}

@Component({
  selector: 'app-filteration',
  standalone: false,
  templateUrl: './filteration.html',
  styleUrl: './filteration.scss',
})
export class Filteration implements OnInit {
  constructor(private teamService: TeamService) {}
  @Output() filtered = new EventEmitter<Team[]>();
  getRole: Team[] = [];
  status: Status[] = [];
  selectedRole: Team | null = null;
  selectedStatus: Status | null = null;

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.teamService.getTeam().subscribe((data) => {
      this.getRole = data;
      this.emitFiltered();
    });
    this.status = [{ name: 'Active' }, { name: 'In Active' }];
  }
  onFilterChange() {
    this.emitFiltered();
  }

  get filteredOrders() {
    let filtered = this.getRole;

    if (this.selectedRole) {
      filtered = filtered.filter((r) => r.role === this.selectedRole?.role);
    }
    if (this.selectedStatus) {
      filtered = filtered.filter((s) => s.status === this.selectedStatus?.name);
    }

    return filtered;
  }
  resetFilteration() {
    this.selectedRole = null;
    this.selectedStatus = null;
    this.emitFiltered();
  }
  private emitFiltered() {
    this.filtered.emit(this.filteredOrders);
  }
}
