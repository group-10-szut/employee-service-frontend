import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {QualificationService} from "../../services/qualification.service";
import {SkillPost} from "../../model/skill-post";

@Component({
  selector: 'app-add-qualification-formular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-qualification-formular.component.html',
  styleUrl: './add-qualification-formular.component.css'
})
export class AddQualificationFormularComponent {
  constructor(public qualificationService: QualificationService) {
  }

  skill: string = '';

  saveQualification() {
    this.qualificationService.createQualification(new SkillPost(this.skill))
    this.skill = '';

    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }

  closeForm() {

  }
}
