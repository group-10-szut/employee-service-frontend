import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {KeycloakService} from 'keycloak-angular';
import {EmployeeService} from './employee.service';
import {EmployeeGet} from '../model/employee-get';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService, KeycloakService],
    });
    service = TestBed.inject(EmployeeService);
    // httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all employees', () => {
    const mockEmployees: EmployeeGet[] = [
      {
        id: 1,
        lastName: 'Doe',
        firstName: 'John',
        street: '123 Main St',
        postcode: '12345',
        city: 'Example City',
        phone: '555-1234',
        skillSet: [{id: 1, skill: 'Skill 1'}, {id: 2, skill: 'Skill 2'}],
      },
      // Add more mock employees as needed
    ];

    // Make the HTTP request
    service.getAllEmployees().subscribe((employees) => {
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne('https://employee.szut.dev/employees');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockEmployees);
  });

  // Step 1 - Create Employee
  it('should create an employee', () => {
    const mockEmployeeGetData = {
      id: 47,  // this will change
      lastName: 'Doe',
      firstName: 'John',
      street: '123 Main St',
      postcode: '12345',
      city: 'Example City',
      phone: '555-1234',
      skillSet: [{id: 1, skill: 'Angular'}],
    };

    const mockEmployeePostData = {
      lastName: 'Doe',
      firstName: 'John',
      street: '123 Main St',
      postcode: '12345',
      city: 'Example City',
      phone: '555-1234',
      skillSet: [1],
    };

    service.createEmployee(mockEmployeePostData).subscribe(employee => {
      expect(employee).toEqual(mockEmployeeGetData);
    });

    const req = httpMock.expectOne('https://employee.szut.dev/employees');
    expect(req.request.method).toBe('POST');
    req.flush(mockEmployeeGetData);
  });

  // Add more tests as needed for other methods in the EmployeeService class
});
