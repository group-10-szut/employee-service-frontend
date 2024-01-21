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
  constructor(public formBuilder: FormBuilder, public qualificationService: QualificationService) {
    this.skillsString.push("Java", "Angular", "Cobol");
  }

  checkoutForm = this.formBuilder.group({
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    stadt: '',
    telefonnummer: '',
    qualifikationen: ''
  })

  skillsString: string[] = [];
  selectedSkills: string[] = [];

  skills: SkillGet[] = [];
  skill: SkillGet | undefined;
  skillFromApi: string | undefined;

  saveEmployee() {
    // Daten an employeeService übertragen

    // leert das Formular
    this.checkoutForm.reset();

    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }

  getSkillListForDropdown() {
    console.log(this.qualificationService.getListOfAllQualifications());
  }

  closeForm() {

  }
}
