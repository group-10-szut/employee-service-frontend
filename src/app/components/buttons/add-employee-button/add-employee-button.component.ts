import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add-employee-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <app-button
      [buttonText]="'Mitarbeiter hinzufügen'"
      [onAddClick]="onAddEmployeeClick"
    ></app-button>
  `,
})
export class AddEmployeeButtonComponent {
  onAddEmployeeClick() {
    // Specific logic for adding employees
    console.log('Add Employee Logic');
  }
}
