import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Adjust the relative path

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrected typo (was 'styleUrl')
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();  // Assuming the AuthService has this method
  }

  // Handle logout functionality
  logout(): void {
    this.authService.logout();  // Assuming the AuthService has a logout method
  }
}
