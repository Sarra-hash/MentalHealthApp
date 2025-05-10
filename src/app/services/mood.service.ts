import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MoodService {
  private baseUrl = 'http://localhost:9191/api/moods';

  constructor(private http: HttpClient) {}

  saveMood(moodData: { mood: string, note: string }) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.baseUrl, moodData, { headers });
    
     
  }
}
