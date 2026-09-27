
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

}

