import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {
  cards: { id: number; icon: string; flipped: boolean; matched: boolean }[] = [];
  flippedCards: any[] = [];
  icons = ['🌸', '🦋', '🌼', '💖', '🍀', '🧸'];
  gameCompleted: boolean = false;

  ngOnInit() {
    this.initializeCards();
  }

  initializeCards() {
    const cardPairs = [...this.icons, ...this.icons]
      .map((icon, index) => ({
        id: index,
        icon,
        flipped: false,
        matched: false,
      }))
      .sort(() => 0.5 - Math.random());

    this.cards = cardPairs;
  }

  flipCard(card: any) {
    if (card.flipped || card.matched || this.flippedCards.length === 2) return;

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      setTimeout(() => {
        const [card1, card2] = this.flippedCards;
        if (card1.icon === card2.icon) {
          card1.matched = card2.matched = true;
        } else {
          card1.flipped = card2.flipped = false;
        }
        this.flippedCards = [];

        // Check if the game is complete
        this.checkGameCompletion();
      }, 1000);
    }
  }

  checkGameCompletion() {
    if (this.cards.every(card => card.matched)) {
      this.gameCompleted = true;
    }
  }

  closePopup() {
    this.gameCompleted = false;
    this.initializeCards(); // Optionally, restart the game after closing the popup
  }
}
