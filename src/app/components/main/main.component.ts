import {Component} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {AddEmployeeFormularComponent} from "../add-employee-formular/add-employee-formular.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeListComponent, AddEmployeeFormularComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  public openEmployeeForm = false;

  showEmployeeForm() {
    this.openEmployeeForm = true;
  }

  closeEmployeeForm() {
    this.openEmployeeForm = false;
  }
}

