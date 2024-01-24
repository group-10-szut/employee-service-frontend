import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-fenster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-fenster.component.html',
  styleUrl: './confirmation-fenster.component.css'
})
export class ConfirmationComponent {
  @Input() message: string = 'Sind Sie sicher, dass Sie dies löschen möchten?';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
