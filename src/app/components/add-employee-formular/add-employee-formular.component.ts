import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCard} from "@angular/material/card";
import {QualificationService} from "../../services/qualification.service";
import {SkillGet} from "../../model/skill-get";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-employee-formular',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCard, FormsModule],
  templateUrl: './add-employee-formular.component.html',
  styleUrl: './add-employee-formular.component.css'
})
export class AddEmployeeFormularComponent {
  constructor(public qualificationService: QualificationService) {
    this.loadData();
    this.getSkillsForDropDown();
  }

  skills: SkillGet[] = [];
  skillsString: string[] = [];

  vorname: string = '';
  nachname: string = '';
  stadt: string = '';
  strasse: string = '';
  telefonnummer: string = '';
  plz: string = '';
  selectedSkills: string[] = [];

  skill: SkillGet | undefined;

  saveEmployee() {
    // Daten an employeeService übertragen

    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }

  loadData() {
    this.qualificationService.getListOfAllQualifications().subscribe({
      next: qualifications => {
        this.skills = qualifications
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getSkillsForDropDown() {
    for (let skill of this.skills) {
      this.skillsString.push(skill.skill);
    }
  }

  closeForm() {

  }
}
