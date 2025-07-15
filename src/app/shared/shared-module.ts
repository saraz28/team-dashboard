import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DrawerModule } from 'primeng/drawer';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SideBar } from './side-bar/side-bar';
import { TeamComponent } from '../team-component/team-component';
import { Filteration } from './filteration/filteration';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { ProjectsComponent } from '../projects-component/projects-component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [SideBar, TeamComponent, Filteration, ProjectsComponent],
  exports: [SideBar, TeamComponent],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    RouterModule,
    KnobModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    MatSidenavModule,
    MatButtonModule,
    ReactiveFormsModule,
    DrawerModule,
    FloatLabelModule,
    RippleModule,
    StyleClassModule,
    TreeTableModule,
    CardModule,
    TreeSelectModule,
    TreeModule,
    TooltipModule,
    ToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    InputNumberModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    HttpClientModule,
    SelectModule,
    MatPaginatorModule,
    InputGroupModule,
    InputGroupAddonModule,
    DialogModule,
    ChartModule,
    GalleriaModule,
    ProgressSpinnerModule,
    IconField,
    InputIcon,
    DividerModule,
  ],
})
export class SharedModule {}
