import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ProjectsComponent } from './projects-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectService } from './services/project-service';
import { SharedModule } from '../shared/shared-module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Project } from '../model/projects';
import { of } from 'rxjs';
const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'Completed',
    assignees: [
      { id: 1, name: 'Alice', avatar: 'https://i.imgur.com/5cFvD2B.jpg' },
      { id: 3, name: 'Sarah', avatar: 'https://i.imgur.com/qIufhof.png' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App',
    status: 'In Progress',
    assignees: [
      { id: 2, name: 'Jhon', avatar: 'https://i.imgur.com/LDOO4Qs.jpg' },
      { id: 4, name: 'Ahmed', avatar: 'https://i.imgur.com/uIgDDDd.jpg' },
    ],
  },
];
class MockProjectService {
  getProjects() {
    return of(mockProjects);
  }
}
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [HttpClientTestingModule, SharedModule, MatSidenavModule],
      providers: [{ provide: ProjectService, useClass: MockProjectService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load projects from service', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.projects.length).toBe(2);
    expect(component.projects).toEqual(mockProjects);
  }));
});
