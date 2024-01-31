import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-add-employee-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="onAddEmployeeClick()">Mitarbeiter hinzufügen</button>
  `,
})
export class AddEmployeeButtonComponent {

  isFormularShowed: boolean = false;

  constructor(public shareService: ShareService) {
    this.shareService.isEmployeeFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  onAddEmployeeClick() {
    this.shareService.changeShowEmployeeForm(true);
  }
}
