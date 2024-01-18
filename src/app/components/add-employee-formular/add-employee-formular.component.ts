import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-add-employee-formular',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCard],
  templateUrl: './add-employee-formular.component.html',
  styleUrl: './add-employee-formular.component.css'
})
export class AddEmployeeFormularComponent {

  checkoutForm = this.formBuilder.group({
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    stadt: '',
    telefonnummer: '',
    qualifikationen: ''
  })

  constructor(public formBuilder: FormBuilder) {

  }

  saveEmployee() {
    // Daten an employeeService übertragen

    // leert das Formular
    this.checkoutForm.reset()

    //Formular schließen

    // Aufruf InfoFenster, dass MA gespeichert wurde
  }
}
