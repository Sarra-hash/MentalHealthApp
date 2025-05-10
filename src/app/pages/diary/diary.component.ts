import { Component } from '@angular/core';
import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  mood: string = '';
  note: string = '';

  constructor(private moodService: MoodService) {}

  submitMood() {
    this.moodService.saveMood({ mood: this.mood, note: this.note }).subscribe({
      next: () => {
        alert('Your mood was saved. Thank you for sharing 🌱');
        this.mood = '';
        this.note = '';
      },
      error: (err) => {
        alert('Error saving your mood. Please try again.');
        console.error(err);
      }
    });
  }
}
