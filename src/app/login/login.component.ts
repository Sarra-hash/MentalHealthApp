import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare let Swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.login.email || !this.login.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        confirmButtonColor: '#a95c7a'
      });
      return;
    }

    this.authService.login(this.login).subscribe({
      next: (response: string) => {
        if (response) {
          // ✅ Store token and user info
          localStorage.setItem('auth_token', response); 
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', this.login.email);

          // ✅ Redirect to profile
          this.router.navigate(['/profile']);

          Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: `Welcome back, ${this.login.email}!`,
            confirmButtonColor: '#a95c7a'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Unexpected response, please try again!',
            confirmButtonColor: '#a95c7a'
          });
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: err.error.message || 'Invalid email or password',
          confirmButtonColor: '#a95c7a'
        });
      }
    });
  }
}
