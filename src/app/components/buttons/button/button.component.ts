import { Component, Input } from '@angular/core';

/**
 * This is a basic button component used across the application.
 * It accepts two inputs:
 * - buttonText: The text displayed on the button.
 * - onAddClick: A callback function that gets executed when the button is clicked.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button (click)="onAddClick?.()">{{ buttonText }}</button>
  `,
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonText: string | undefined;
  @Input() onAddClick: (() => void) | undefined;
}
