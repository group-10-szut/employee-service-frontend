import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillGet} from "../../model/skill-get";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-qualifikation-formular',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './qualifikation-formular.component.html',
  styleUrl: './qualifikation-formular.component.css'
})
export class QualifikationFormularComponent {
  constructor(public formBuilder: FormBuilder) {

  }

  checkoutForm = this.formBuilder.group({
    qualifikationen: ''
  })

  saveQualification() {
    // Daten an employeeService übertragen

    // leert das Formular
    this.checkoutForm.reset();

    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }
  closeForm() {

  }
}
