import {Component} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {AddEmployeeFormularComponent} from "../add-employee-formular/add-employee-formular.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeListComponent, AddEmployeeFormularComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

