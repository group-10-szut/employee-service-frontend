import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add-qualification-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <app-button
      [buttonText]="'Add Qualification'"
      [onAddClick]="onAddQualificationClick"
    ></app-button>
  `
})
export class AddQualificationButtonComponent extends ButtonComponent {
  onAddQualificationClick() {
    // Specific logic for adding qualifications
    console.log('Add Qualification Logic');
  }
}
