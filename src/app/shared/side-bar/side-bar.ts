import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  activeTab: string = 'team';
  isExpanded: boolean = false;
  isShowing = false;
  constructor() {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia(
      '(pointer: coarse), (max-width: 1199px)'
    );
    this.isMobile.set(this._mobileQuery.matches);

    this._mobileQueryListener = () => {
      this.isMobile.set(this._mobileQuery.matches);
      if (this._mobileQuery.matches && this.sidenav) {
        this.sidenav.close();
      }
    };

    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  //close sidebar on click nav item
  closeIfMobile() {
    if (this.isMobile()) {
      this.sidenav.close();
    }
  }
  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
