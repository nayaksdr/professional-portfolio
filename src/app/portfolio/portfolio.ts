import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {

  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // Future scroll animation logic can be added here
  }

}