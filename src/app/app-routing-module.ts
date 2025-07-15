import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBar } from './shared/side-bar/side-bar';

const routes: Routes = [
  {
    path: '',
    component: SideBar,
    children: [
      {
        path: 'team',
        loadChildren: () =>
          import('./team-component/team-component-module').then(
            (m) => m.TeamComponentModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import(
            './/projects-component/projects-component-routing-module'
          ).then((m) => m.ProjectsComponentRoutingModule),
      },
      {
        path: '',
        redirectTo: 'team',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '' },
  // {
  //   path: 'team',
  //   loadChildren: () =>
  //     import('./team-component/team-component-module').then(
  //       (m) => m.TeamComponentModule
  //     ),
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () =>
  //     import('./projects-component/projects-component-routing-module').then(
  //       (m) => m.ProjectsComponentRoutingModule
  //     ),
  // },
  // {
  //   path: '',
  //   redirectTo: 'team',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
