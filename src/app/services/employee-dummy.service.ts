import { Injectable } from '@angular/core';
import { EmployeeGet } from '../model/employee-get';
import { dummyEmployees } from './dummy-data/dummy-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDummyService {

  constructor() { }

  /**
   * Retrieves a list of all employees (example data).
   * @returns EmployeeGet[] - A list of employees.
   */
  public getAllEmployees(): EmployeeGet[] {
    return dummyEmployees;
  }
}
