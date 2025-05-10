import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
declare let Swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields correctly!',
        confirmButtonColor: '#a95c7a'
      });
      return;
    }

    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(newUser).subscribe({
      next: (_: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Welcome!',
          text: `Hello ${this.username}, your account has been created!`,
          confirmButtonColor: '#a95c7a'
        });
        form.resetForm();
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error?.error?.message || 'Something went wrong!',
          confirmButtonColor: '#a95c7a'
        });
      }
    });
  }
}
