import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {ShareService} from "../../../services/share.service";

@Component({
  selector: 'app-add-qualification-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <button (click)="onAddQualificationClick()">Qualifikation hinzufügen</button>
  `
})

export class AddQualificationButtonComponent {

  isFormularShowed: boolean = false;

  constructor(public shareService: ShareService) {
    this.shareService.isQualificationFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  onAddQualificationClick() {
    this.shareService.changeShowQualificationForm(true);
  }
}
