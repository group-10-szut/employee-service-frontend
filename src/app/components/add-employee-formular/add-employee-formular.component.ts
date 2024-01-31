import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QualificationService} from "../../services/qualification.service";
import {SkillGet} from "../../model/skill-get";
import {ShareService} from "../../services/share.service";
import {EmployeeService} from "../../services/employee.service";
import {EmployeePost} from "../../model/employee-post";
import { SkillPost } from '../../model/skill-post';

@Component({
  selector: 'app-add-employee-formular',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-employee-formular.component.html',
  styleUrl: './add-employee-formular.component.css'
})
export class AddEmployeeFormularComponent {
  constructor(private qualificationService: QualificationService,
              private employeeService: EmployeeService,
              private shareService: ShareService) {
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

    let newEmployee: EmployeePost = {
      lastName: this.nachname,
      firstName: this.vorname,
      street: this.strasse,
      postcode: this.plz,
      city: this.stadt,
      phone: this.telefonnummer,
      skillSet: this.postSkills.map((skill) => skill.id)
    };

    this.employeeService.createEmployee(newEmployee).subscribe({
      next: () => {
        //Erfolgreiche Verarbeitung der gespeicherten Daten
        console.log('Employee wurde erfolgreich gespeichert:');
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

    // TODO Anzeigen des Info-Fensters? - kein variabler Text möglich
    this.closeForm();
    this.cleanForm();
    // TODO reload der MA-Liste
  }

  formatSelectedSkillsToPostSkills() {
    let uniqueSkills = new Set(this.selectedSkills);
    for (let skillString of uniqueSkills) {
      for (let skill of this.getSkills) {
        if (skillString === skill.skill) {
          let newSkill: SkillGet = {
            id: skill.id,
            skill: skillString
          }
          this.postSkills.push(newSkill)
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

