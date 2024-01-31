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
  constructor(private qualificationService: QualificationService, private shareService: ShareService) {
    this.shareService.isQualificationFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  isFormularShowed: boolean = true;
  skill: string = '';

  saveQualification() {
    let newSkill: SkillPost = {skill: this.skill}
    this.qualificationService.createQualification(newSkill).subscribe({
      next: () => {
        //Erfolgreiche Verarbeitung der gespeicherten Daten
        console.log('Qualifikation wurde erfolgreich gespeichert:');
      },
      error: (error) => {
        //Fehlerbehandlung bei Speicherfehler
        console.error('Fehler beim speichern der Daten', error);
      },
      complete: () => {
        //Wenn Observable abgeschlossen ist
        console.log('Speichern abgeschlossen');
      },
    });
    this.skill = '';
    // TODO Anzeigen des Info-Fensters? - kein variabler Text möglich
    this.closeForm();
    // TODO reload der Qualifications-Liste
  }

  closeForm() {
    this.shareService.changeShowQualificationForm(false);
  }
}
