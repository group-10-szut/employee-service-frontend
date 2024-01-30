import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QualificationService} from "../../services/qualification.service";
import {SkillGet} from "../../model/skill-get";
import {ShareService} from "../../services/share.service";
import {EmployeeService} from "../../services/employee.service";
import {EmployeePost} from "../../model/employee-post";

@Component({
  selector: 'app-add-employee-formular',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-employee-formular.component.html',
  styleUrl: './add-employee-formular.component.css'
})
export class AddEmployeeFormularComponent {
  constructor(public qualificationService: QualificationService, public employeeService: EmployeeService,
              public shareService: ShareService) {
    this.loadData();

    this.shareService.isEmployeeFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  isFormularShowed: boolean = true;
  getSkills: SkillGet[] = [];

  vorname: string = '';
  nachname: string = '';
  stadt: string = '';
  strasse: string = '';
  telefonnummer: string = '';
  plz: string = '';
  selectedSkills: string[] = [];

  postSkills: SkillGet[] = [];

  loadData() {
    this.qualificationService.getListOfAllQualifications().subscribe({
      next: qualifications => {
        this.getSkills = qualifications
      },
      error: err => {
        console.log(err);
      }
    })
  }

  saveEmployee() {
    this.formatSelectedSkillsToPostSkills();
    this.employeeService.createEmployee(
      new EmployeePost(this.nachname, this.vorname, this.strasse, this.plz,
        this.strasse, this.telefonnummer, this.postSkills))

    // TODO Anzeigen des Info-Fensters? - kein variabler Text möglich
    console.log(this.postSkills)
    this.closeForm();
    this.cleanForm();
    // TODO reload der MA-Liste
  }

  formatSelectedSkillsToPostSkills() {
    let uniqueSkills = new Set(this.selectedSkills);
    for (let skillString of uniqueSkills) {
      for (let skill of this.getSkills) {
        if (skillString === skill.skill) {
          this.postSkills.push(new SkillGet(skill.id, skillString))
        }
      }
    }
  }

  closeForm() {
    this.shareService.changeShowEmployeeForm(false);
  }

  cleanForm() {
    this.vorname = '';
    this.nachname = '';
    this.stadt = '';
    this.strasse = '';
    this.telefonnummer = '';
    this.plz = '';
    this.selectedSkills = [];
  }
}

