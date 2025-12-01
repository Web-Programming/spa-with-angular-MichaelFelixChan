import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('griya-mdp');

  // Inject AuthService dan Router
  constructor(public authService: Auth, private router: Router) {}

  // Method logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
