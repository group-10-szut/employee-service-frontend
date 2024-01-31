import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGet } from '../../model/skill-get';
import { AddQualificationButtonComponent } from '../buttons/add-qualification-button/add-qualification-button.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { QualificationService } from '../../services/qualification.service';
import { SkillPost } from '../../model/skill-post';
import { SkillEmployees } from '../../model/skill-employees';
import { ConfirmationComponent } from '../confirmation-fenster/confirmation-fenster.component';
import { InfoFensterComponent } from '../info-fenster/info-fenster.component';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [
    CommonModule,
    AddQualificationButtonComponent,
    FooterComponent,
    FormsModule,
    ConfirmationComponent,
    InfoFensterComponent
  ],
  templateUrl: './qualification-list.component.html',
  styleUrl: './qualification-list.component.css',
})
export class QualificationListComponent {
  searchTerm: string = '';
  expandedSkillID: number | null = null;
  editSkills: SkillGet | undefined;
  skillList: SkillGet[] = [];
  skilledEmployeeList: SkillEmployees | undefined;
  showConfirmation: boolean = false;
  showInfo: boolean = false;
  qualificationToDeleteId: number | null = null;

  constructor(private service: QualificationService, private shareService: ShareService) {
    this.loadSkills();
    this.shareService.isQualificationCreated.subscribe({
      next: (skill) => {
        console.log('Neue Qualifikation wurde angelegt');
        this.loadSkills();
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  /**
   * saves the edited skill, reloads the table
   * and closes the expanded field
   * @param skill
   */
  save(skill: SkillGet) {
    let skillPost: SkillPost = { skill: skill.skill };
    this.service.updateQualificationById(skill.id, skillPost).subscribe({
      next: (skill) => {
        console.log('Update erfolgreich');
        this.cancelEdit();
        this.loadSkills();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  /**
   * get all Employees which have the respective skill
   * @param id
   */
  getEmployeesBySkill(id: number) {
    this.service.getQualificationEmployees(id).subscribe({
      next: (employee) => {
        this.skilledEmployeeList = employee;
        console.log('Anfrage erfolgreich', employee);
        console.log(this.skilledEmployeeList);
      },
      error: (error) => {
        console.error('Fehler bei Anfrage der Daten', error);
      },
      complete: () => {
        console.log('Anfrgae abgeschlossen');
      },
    });
  }

  deleteQualification(id: number): void {
    // Show confirmation window
    this.showConfirmation = true;
    this.qualificationToDeleteId = id;
  }

  onConfirmationResult(confirmed: boolean): void {
    if (confirmed) {
      // User confirmed deletion, call the service method
      debugger;
      this.service.deleteQualificationById(this.qualificationToDeleteId!)
        .subscribe({
          next: () => {
            // Deletion successful, show info window
            this.showInfo = true;
            this.loadSkills(); // Refresh qualification list if needed
          },
          error: (error) => {
            console.error('Error deleting qualification:', error);
          },
        });
    }

    // Reset variables
    this.showConfirmation = false;
    this.qualificationToDeleteId = null;
  }

  onInfoClosed(): void {
    // Hide info window
    this.showInfo = false;
  }

  /**
   * Takes the skill and hands it down to the toEdit-function
   * and therefor makes it editable
   * @param skill
   */
  edit(skill: SkillGet) {
    this.editSkills = skill;
  }

  /**
   * makes the editSkills Variable undefined again and
   * therefore puts the table-row in default condition
   * and closes the expansion field
   */
  cancelEdit() {
    this.editSkills = undefined;
  }

  /**
   * Handles together with edit-function above
   * whether the state of the table-row is in edit-mode or not
   * @param skill
   */
  toEdit(skill: SkillGet): boolean {
    if (!this.editSkills) {
      return false;
    } else return this.editSkills === skill;
  }

  /**
   * Toggles the Expansion field by clicking the up- or down icon
   * based on the id of the respective skill
   * @param skillId
   */
  toggleExpansion(skillId: number): void {
    if (this.expandedSkillID === skillId) {
      this.expandedSkillID = null; // Collapse if already expanded
    } else {
      this.skilledEmployeeList = undefined;
      this.getEmployeesBySkill(skillId);
      this.expandedSkillID = skillId; // Expand otherwise
    }
  }

  /**
   * Filters the list of qualifications based on the search term.
   * @returns {SkillGet[]} The filtered list of qualifications.
   */
  filteredQualifications(): SkillGet[] {
    return this.getSkillList().filter((qualification) =>
      this.matchSearchTerm(qualification),
    );
  }

  /**
   * Checks if a qualification matches the search term.
   * @param {SkillGet} qualification - The qualification object to check.
   * @returns {boolean} True if the qualification matches the search term, false otherwise.
   */
  matchSearchTerm(qualification: SkillGet): boolean {
    // Convert the search term to lowercase for case-insensitive comparison
    const term = this.searchTerm.toLowerCase();

    // Check if the qualification's name matches the search term
    return qualification.skill.toLowerCase().includes(term);
  }

  /**
   * loads all available skills which are distributed in the table
   * @private
   */
  private loadSkills(): void {
    this.service.getQualifications().subscribe({
      next: (skills) => {
        this.skillList = skills;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private getSkillList(): SkillGet[] {
    return this.skillList.sort((a, b) => b.id - a.id);
  }
}
