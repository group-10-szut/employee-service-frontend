import { Component, Input } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { IEmployee } from '../../model/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  @Input() iEmployee?: IEmployee;
  employeeList: IEmployee[] = [
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
}

