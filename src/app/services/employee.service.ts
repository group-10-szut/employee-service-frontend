import {SkillPost} from "../model/skill-post";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeGet} from "../model/employee-get";
import {EmployeePost} from "../model/employee-post";
import {EmployeeQualificationsGet} from "../model/employee-qualifications-get";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://employee.szut.dev/employees'  // base URL for the Employee backend API.

  /**
   * Constructor for the EmployeeService.
   * @param http - Angular HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Fetches a single employee by ID.
   * @param id - The ID of the employee to retrieve.
   * @returns Observable<EmployeeGet> - An observable containing the employee data.
   */
  public getEmployeeById(id: number): Observable<EmployeeGet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<EmployeeGet>(url);
  }

  /**
   * Updates an existing employee by ID.
   * NOTE: if empty qualification list is passed, all employee's qualifications will be deleted!
   * @param id - The ID of the employee to update.
   * @param employeeData - The data to update for the employee.
   * @returns Observable<EmployeeGet> - An observable indicating the success of the update.
   */
  public updateEmployeeById(id: number, employeeData: EmployeePost): Observable<EmployeeGet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<EmployeeGet>(url, employeeData);
  }

  /**
   * Deletes an employee by ID.
   * @param id - The ID of the employee to delete.
   * @returns Observable<void> - An observable indicating the success of the deletion.
   */
  public deleteEmployeeById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  /**
   * Retrieves a list of all employees.
   * @returns Observable<EmployeeGet[]> - An observable containing a list of employees.
   */
  public getAllEmployees(): Observable<EmployeeGet[]> {
    return this.http.get<EmployeeGet[]>(this.baseUrl);
  }

  /**
   * Creates a new employee.
   * @param employeeData - The data for the new employee.
   * @returns Observable<EmployeeGet> - An observable containing the created employee data.
   */
  public createEmployee(employeeData: EmployeePost): Observable<EmployeeGet> {
    console.log("Employee was created: " + employeeData.lastName)
    return this.http.post<EmployeeGet>(this.baseUrl, employeeData);
  }

  /**
   * Retrieves qualifications for a specific employee by ID.
   * @param id - The ID of the employee to retrieve qualifications for.
   * @returns Observable<EmployeeQualificationsGet> - An observable containing the qualification's data.
   */
  public getQualificationsById(id: number): Observable<EmployeeQualificationsGet> {
    const url = `${this.baseUrl}/${id}/qualifications`;
    return this.http.get<EmployeeQualificationsGet>(url);
  }

  /**
   * Adds qualification for a specific employee by ID.
   * @param id - The ID of the employee to add qualifications to.
   * @param skill - The qualification to add.
   * @returns Observable<EmployeeQualificationsGet> - An observable containing the updated employee data.
   */
  public addQualificationById(id: number, skill: SkillPost): Observable<EmployeeQualificationsGet> {
    const url = `${this.baseUrl}/${id}/qualifications`;
    return this.http.post<EmployeeQualificationsGet>(url, skill);
  }

  /**
   * Deletes qualification for a specific employee by ID.
   * @param id - The ID of the employee to delete qualifications for.
   * @param skill - qualification that must be deleted.
   * @returns Observable<EmployeeQualificationsGet> - An observable indicating the success of the deletion.
   */
  public deleteQualificationById(id: number, skill: SkillPost): Observable<EmployeeQualificationsGet> {
    const url = `${this.baseUrl}/${id}/qualifications`;
    return this.http.delete<EmployeeQualificationsGet>(url, {body: skill});
  }
}
