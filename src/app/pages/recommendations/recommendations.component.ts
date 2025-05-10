import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  selectedMood: string = '';
  tips: string[] = [];

  moodTips: { [key: string]: string[] } = {
    happy: [
      'Keep a gratitude journal 💛',
      'Spread your joy – compliment someone!',
      'Reflect on what’s going well and why.'
    ],
    sad: [
      'It’s okay to feel sad. Give yourself grace 💙',
      'Listen to calming music or journal your thoughts.',
      'Reach out to someone you trust.'
    ],
    anxious: [
      'Try deep breathing or meditation 🧘‍♀️',
      'Ground yourself by naming 5 things you see.',
      'Limit caffeine and news intake.'
    ],
    angry: [
      'Take a walk to cool off 🌿',
      'Write down what made you angry and why.',
      'Try physical activity to release tension.'
    ],
    neutral: [
      'Check in with yourself today 🧡',
      'Try something creative or new.',
      'Keep nurturing your mental space.'
    ]
  };

  showTips() {
    this.tips = this.moodTips[this.selectedMood] || [];
  }
}
