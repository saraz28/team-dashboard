import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project-service';
import { Project } from '../model/projects';

@Component({
  selector: 'app-projects-component',
  standalone: false,
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  projects: Project[] = [];

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
