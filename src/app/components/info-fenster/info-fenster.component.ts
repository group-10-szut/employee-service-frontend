import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-fenster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-fenster.component.html',
  styleUrl: './info-fenster.component.css'
})
export class InfoFensterComponent {
  @Input() message: string = 'Der Löschvorgang wurde erfolgreich abgeschlossen';
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
