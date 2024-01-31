import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareService} from "../../../services/share.service";

@Component({
  selector: 'app-add-qualification-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="onAddQualificationClick()">Qualifikation hinzufügen</button>
  `
})

export class AddQualificationButtonComponent {

  isFormularShowed: boolean = false;

  constructor(private shareService: ShareService) {
    this.shareService.isQualificationFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  onAddQualificationClick() {
    this.shareService.changeShowQualificationForm(true);
  }
}
