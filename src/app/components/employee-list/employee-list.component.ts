import { Component, Input } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import {EmployeeGet} from "../../model/employee-get";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  @Input() employee?: EmployeeGet;
  employeeList: EmployeeGet[] = [
    {
      id: 0,
      lastName: 'Müller',
      firstName: 'Hans',
      street: 'Musterstraße 1',
      postcode: '12345',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Datenbankdesign',
          id: 2,
        },
      ],
    },
    {
      id: 1,
      lastName: 'Schmidt',
      firstName: 'Anna',
      street: 'Musterstraße 2',
      postcode: '23456',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Projektmanagement',
          id: 3,
        },
      ],
    },
    {
      id: 2,
      lastName: 'Schneider',
      firstName: 'Peter',
      street: 'Musterstraße 3',
      postcode: '34567',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Datenbankdesign',
          id: 2,
        },
        {
          skill: 'Projektmanagement',
          id: 3,
        },
      ],
    },
    {
      id: 3,
      lastName: 'Fischer',
      firstName: 'Maria',
      street: 'Musterstraße 4',
      postcode: '45678',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Datenbankdesign',
          id: 2,
        },
        {
          skill: 'Projektmanagement',
          id: 3,
        },
        {
          skill: 'Qualitätssicherung',
          id: 4,
        },
      ],
    },
    {
      id: 4,
      lastName: 'Weber',
      firstName: 'Thomas',
      street: 'Musterstraße 5',
      postcode: '56789',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Datenbankdesign',
          id: 2,
        },
        {
          skill: 'Projektmanagement',
          id: 3,
        },
        {
          skill: 'Qualitätssicherung',
          id: 4,
        },
        {
          skill: 'UI-Design',
          id: 5,
        },
      ],
    },
    {
      id: 5,
      lastName: 'Meyer',
      firstName: 'Julia',
      street: 'Musterstraße 6',
      postcode: '67890',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Datenbankdesign',
          id: 2,
        },
        {
          skill: 'Projektmanagement',
          id: 3,
        },
        {
          skill: 'Qualitätssicherung',
          id: 4,
        },
        {
          skill: 'UI-Design',
          id: 5,
        },
        {
          skill: 'Backend-Entwicklung',
          id: 6,
        },
      ],
    },
    {
      id: 6,
      lastName: 'Wagner',
      firstName: 'Markus',
      street: 'Musterstraße 7',
      postcode: '78901',
      city: 'Musterstadt',
      phone: '0123456789',
      skillSet: [
        {
          skill: 'Webentwicklung',
          id: 1,
        },
        {
          skill: 'Java',
          id: 7,
        },
      ],
    },
  ];

  constructor(private employeeService: EmployeeService) {
    this.loadEmployeeList();
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

