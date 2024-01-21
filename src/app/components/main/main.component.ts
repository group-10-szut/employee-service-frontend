import {Component} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {QualifikationFormularComponent} from "../qualifikation-formular/qualifikation-formular.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeListComponent, QualifikationFormularComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

