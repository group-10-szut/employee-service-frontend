import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-qualifikation-formular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qualifikation-formular.component.html',
  styleUrl: './qualifikation-formular.component.css'
})
export class QualifikationFormularComponent {
  constructor() {

  }

  skill: string = '';

  saveQualification() {
    // Daten an employeeService übertragen

    // leert das Formular


    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }

  closeForm() {

  }
}
