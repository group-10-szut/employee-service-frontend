import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {EmployeeGet} from '../../model/employee-get';
import {EmployeeService} from '../../services/employee.service';
import {AddEmployeeButtonComponent} from '../buttons/add-employee-button/add-employee-button.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule} from '@angular/forms';
import {AddEmployeeFormularComponent} from "../add-employee-formular/add-employee-formular.component";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf, NgIf, AddEmployeeButtonComponent, FooterComponent, FormsModule, AddEmployeeFormularComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  searchTerm: string = '';
  expandedEmployeeId: number | null = null;
  employeeList: EmployeeGet[] = [];  // dummy data was moved into the `employee-dummy.service.ts`
  isFormularShowed: boolean = false;

  constructor(private employeeService: EmployeeService,
              public shareService: ShareService) {
    this.shareService.isEmployeeFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
    this.loadEmployeeList();
  }

  toggleExpansion(employeeId: number): void {
    if (this.expandedEmployeeId === employeeId) {
      this.expandedEmployeeId = null; // Collapse if already expanded
    } else {
      this.expandedEmployeeId = employeeId; // Expand otherwise
    }
  }

  private loadEmployeeList(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: employees => {
        this.employeeList = employees
      },
      error: err => {
        console.log(err);
      }
    });
  }

  /**
   * Filters the list of employees based on the search term.
   * @returns {EmployeeGet[]} The filtered list of employees.
   */
  filteredEmployeeList(): EmployeeGet[] {
    return this.employeeList.filter(employee =>
      this.matchSearchTerm(employee)
    );
  }

  /**
   * Checks if an employee matches the search term.
   * @param {EmployeeGet} employee - The employee object to check.
   * @returns {boolean} True if the employee matches the search term, false otherwise.
   */
  matchSearchTerm(employee: EmployeeGet): boolean {
    // Convert the search term to lowercase for case-insensitive comparison
    const term = this.searchTerm.toLowerCase();

    // Check if the employee's first name, last name, or any skill matches the search term
    return (
      employee.firstName.toLowerCase().includes(term) ||
      employee.lastName.toLowerCase().includes(term) ||
      employee.skillSet.some((skill: { skill: string; }) => skill.skill.toLowerCase().includes(term))
    );
  }

  private exampleServiceUsage(): void {
    // let employee: EmployeeGet | null = null;

    // let employeePost: EmployeePost = {
    //   "lastName": "Doe",
    //   "firstName": "John",
    //   "street": "123 Main St",
    //   "postcode": "12345",
    //   "city": "Example City",
    //   "phone": "555-1234",
    //   "skillSet": [1]
    // };

    // Step 1 - Create Employee
    // this.employeeService.createEmployee(employeePost).subscribe({
    //   next: employee => {
    //     employee = employee
    //     console.log("Successfully created employee: ", employee);
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });

    // Step 2 - Get Employee By ID
    // this.employeeService.getEmployeeById(employee.id).subscribe({
    //   next: employee => {
    //     console.log("Successfully fetched employee: ", employee);
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });

    // TODO
    // Step 3 - Change Employee

    // Step 4 - Get Employees Qualifications

    // Step 5 - Add Qualification To Employee

    // Step 6 - Delete Qualification Of Employee

    // Step 7 - Delete Employee
  }
}

