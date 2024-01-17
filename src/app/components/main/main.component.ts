import {Component} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {QualificationListComponent} from "../qualification-list/qualification-list.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeListComponent, QualificationListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

