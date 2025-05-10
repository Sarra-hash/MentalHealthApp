import { Component } from '@angular/core';
type BreathStage = 'inhale' | 'hold' | 'exhale';

@Component({
  selector: 'app-breathing',
  templateUrl: './breathing.component.html',
  styleUrl: './breathing.component.css'
})
export class BreathingComponent {
    showBreath = false;
    breathInstruction = '';
    breathStage = '';
  
    startBreathing() {
      this.showBreath = true;
  
      const sequence = [
        { instruction: 'Inhale...', stage: 'inhale' },
        { instruction: 'Hold...', stage: 'hold' },
        { instruction: 'Exhale...', stage: 'exhale' },
        { instruction: 'Hold...', stage: 'hold' },
      ];
  
      let index = 0;
  
      const loop = () => {
        const step = sequence[index];
        this.breathInstruction = step.instruction;
        this.breathStage = step.stage;
  
        index = (index + 1) % sequence.length;
        setTimeout(loop, 4000);
      };
  
      loop();
    }
  }
  