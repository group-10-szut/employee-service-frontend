import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-qualification-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  `,
})
export class AddQualificationButtonComponent {
  onAddQualificationClick() {
    // Specific logic for adding qualifications
    console.log('Add Qualification Logic');
  }
}
