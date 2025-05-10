import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Import Observable from rxjs

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9191/api/users';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post('http://localhost:9191/api/users/register', user);
  }

  login(credentials: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, credentials);
  }

  // Check if the code is running in the browser and localStorage is available
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      return !!isLoggedIn;  // Return true if 'isLoggedIn' exists in localStorage
    }
    return false;  // Default return false if localStorage is not available
  }

  // Logout method
  logout(): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      localStorage.removeItem('isLoggedIn');  // Safely remove 'isLoggedIn' from localStorage
    }
  }
}
