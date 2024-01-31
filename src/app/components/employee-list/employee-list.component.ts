import { Component } from '@angular/core';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { EmployeeGet } from '../../model/employee-get';
import { EmployeeService } from '../../services/employee.service';
import { AddEmployeeButtonComponent } from '../buttons/add-employee-button/add-employee-button.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SkillGet } from '../../model/skill-get';
import { QualificationService } from '../../services/qualification.service';
import { Subscription } from 'rxjs';
import { EmployeePost } from '../../model/employee-post';
import { SkillPost } from '../../model/skill-post';
import { AddEmployeeFormularComponent } from '../add-employee-formular/add-employee-formular.component';
import { ConfirmationComponent } from '../confirmation-fenster/confirmation-fenster.component';
import { InfoFensterComponent } from '../info-fenster/info-fenster.component';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    AddEmployeeButtonComponent,
    FooterComponent,
    FormsModule,
    AddEmployeeFormularComponent,
    ConfirmationComponent,
    InfoFensterComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  searchTerm: string = '';
  expandedEmployeeId: number | null = null;
  skillList: SkillGet[] = [];
  employeeList: EmployeeGet[] = [];
  editEmployees: EmployeeGet | undefined;
  selectedSkill: string = '';
  protected readonly Math = Math;
  showConfirmation: boolean = false;
  employeeToDeleteId: number | null = null;
  showInfo: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private qualificationService: QualificationService,
    private shareService: ShareService
  ) {
    this.shareService.isEmployeeCreated.subscribe({
      next: () => {
        console.log('Employee erforgreich angelegt');
        this.loadEmployeeList();
      },
      error: (error) => {
        console.log(error);
      },
    })
    this.loadEmployeeList();
    this.loadSkills();
  }

  /**
   * Takes the employee and hands it down to toEdit-function
   * to make the employee editable
   * @param employee
   */
  edit(employee: EmployeeGet) {
    this.editEmployees = employee;
  }

  /**
   * Handles with edit-function the change
   * from Data display to input-fields
   * to make the employee editable
   * @param employee
   */
  toEdit(employee: EmployeeGet): boolean {
    if (!this.editEmployees) {
      return false;
    } else return this.editEmployees === employee;
  }

  /**
   * declares the editEmployees variable undefined again
   * and therefore sets the table-row in default condition
   * and closes the expanded field
   */
  cancelEdit() {
    this.editEmployees = undefined;
  }

  /**
   * updates the edited Employee and reloads the table
   * @param employee
   */
  save(employee: EmployeeGet) {
    let skillPostList: SkillPost[] = employee.skillSet.map(
      (skillGet: { skill: any }) => {
        return { skill: skillGet.skill };
      },
    );
    let employeePost: EmployeePost = {
      lastName: employee.lastName,
      firstName: employee.firstName,
      street: employee.street,
      postcode: employee.postcode,
      city: employee.city,
      phone: employee.phone,
      skillSet: employee.skillSet.map((skill) => skill.id),
    };
    this.employeeService
      .updateEmployeeById(employee.id, employeePost)
      .subscribe({
        next: () => {
          //Erfolgreiche Verarbeitung der gespeicherten Daten
          console.log('Daten erfolgreich gespeichert:');
          this.loadEmployeeList();
        },
        error: (error) => {
          //Fehlerbehandlung bei Speicherfehler
          console.error('Fehler beim speichern der Daten', error);
        },
        complete: () => {
          //Wenn Observable abgeschlossen ist
          console.log('Speichern abgeschlossen');
        },
      });

    this.loadEmployeeList();
  }

  /**
   * updates the selected employee with a new skill from the dropdown-menu
   * reloads the employees and therefore closes the expansion
   * @param employeeId
   * @param addedSkill
   */
  addSelectedSkill(employeeId: number, addedSkill: string) {
    let skillPost: SkillPost = { skill: addedSkill };
    this.employeeService.addQualificationById(employeeId, skillPost).subscribe({
      next: (response) => {
        console.log('Skill hinzugefügt', response);
      },
      error: (error) => {
        console.error('Fehler beim update', error);
      },
      complete: () => {
        console.log('Update der Qualifikation abgeschlossen');
      },
    });
    this.loadEmployeeList();
  }

  /**
   * Updates the employee by deleting the selected skill from the list
   * reloads the employees and therefore closes the expansion
   * @param id
   * @param skill
   */
  deleteSelectedSkill(id: number, skill: string) {
    let skillPost: SkillPost = { skill: skill };
    this.employeeService.deleteQualificationById(id, skillPost).subscribe({
      next: (response) => {
        console.log('Qualifikation gelöscht', response);
        this.loadEmployeeList();
      },
      error: (error) => {
        console.log('Fehler beim Löschen der Qualifikation', error);
      },
      complete: () => {
        console.log('Löschen der Qualifikation abgeschlossen');
      },
    });
  }

  deleteEmployee(employee: EmployeeGet): void {
    // Show the confirmation window
    this.showConfirmation = true;
    this.employeeToDeleteId = employee.id;
  }

  onConfirmationResult(confirmed: boolean): void {
      if (confirmed) {
          // User confirmed deletion, call the service method
          this.employeeService.deleteEmployeeById(this.employeeToDeleteId!)
              .subscribe(() => {
                  this.showInfo = true;
                  // Refresh employee list
                  this.loadEmployeeList();
              },
                  error => {
                      console.error('Error deleting the Employee:', error);
                  });
      }

      // Reset variables
      this.showConfirmation = false;
      this.employeeToDeleteId = null;
  }

  onInfoClosed(): void {
      // Hide info window
      this.showInfo = false;
  }

  /**
   * Toggles the expansion field by clicking the up- or down icon
   * based on the id of the respective employee
   * @param employeeId
   */
  toggleExpansion(employeeId: number): void {
    if (this.expandedEmployeeId === employeeId) {
      this.expandedEmployeeId = null; // Collapse if already expanded
    } else {
      this.expandedEmployeeId = employeeId; // Expand otherwise
    }
  }

  /**
   * loads all available employees
   * @private
   */
  private loadEmployeeList(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employeeList = employees;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /**
   * Filters the list of employees based on the search term.
   * @returns {EmployeeGet[]} The filtered list of employees.
   */
  filteredEmployeeList(): EmployeeGet[] {
    return this.employeeList.filter((employee) =>
      this.matchSearchTerm(employee),
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
      employee.skillSet.some((skill: { skill: string }) =>
        skill.skill.toLowerCase().includes(term),
      )
    );
  }

  private loadSkills(): Subscription {
    return this.qualificationService.getQualifications().subscribe({
      next: (skills) => {
        this.skillList = skills;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

