import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrl: './affirmation.component.css'
})
export class AffirmationComponent {
  affirmation: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAffirmationFromAPI();
  }

  getAffirmationFromAPI(): void {
    this.http.get<any>('https://www.affirmations.dev/')
      .subscribe(response => {
        this.affirmation = response.affirmation;
      }, error => {
        this.affirmation = "You are doing your best, and that’s enough. 🌸"; // fallback
      });
  }
}
