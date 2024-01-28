import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {QualificationService} from "../../services/qualification.service";
import {SkillPost} from "../../model/skill-post";
import {ShareService} from "../../services/share.service";
import {InfoFensterComponent} from "../info-fenster/info-fenster.component";

@Component({
  selector: 'app-add-qualification-formular',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoFensterComponent],
  templateUrl: './add-qualification-formular.component.html',
  styleUrl: './add-qualification-formular.component.css'
})
export class AddQualificationFormularComponent {
  constructor(public qualificationService: QualificationService, public shareService: ShareService) {
    this.shareService.isQualificationFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  isFormularShowed: boolean = true;
  skill: string = '';

  saveQualification() {
    this.qualificationService.createQualification(new SkillPost(this.skill))
    this.skill = '';
    // TODO Anzeigen des Info-Fensters? - kein variabler Text möglich
    this.closeForm();
    // TODO reload der Qualifications-Liste
  }

  closeForm() {
    this.shareService.changeShowQualificationForm(false);
  }
}
