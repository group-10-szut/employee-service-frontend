import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGet } from '../../model/skill-get';
import { AddQualificationButtonComponent } from '../buttons/add-qualification-button/add-qualification-button.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { QualificationService } from '../../services/qualification.service';
import { SkillPost } from '../../model/skill-post';
import { SkillEmployees } from '../../model/skill-employees';

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [
    CommonModule,
    AddQualificationButtonComponent,
    FooterComponent,
    FormsModule,
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

  constructor(private service: QualificationService) {
    this.loadSkills();
  }

  save(skill: SkillGet) {
    let skillPost: SkillPost = { skill: skill.skill };
    this.service.updateQualificationById(skill.id, skillPost).subscribe({
      next: (skill) => {
        console.log('Update erfolgreich');
        this.cancelEdit();
        this.loadSkills();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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

  edit(skill: SkillGet) {
    this.editSkills = skill;
  }
  cancelEdit() {
    this.editSkills = undefined;
  }

  toEdit(skill: SkillGet): boolean {
    if (!this.editSkills) {
      return false;
    } else return this.editSkills === skill;
  }

  toggleExpansion(skillId: number): void {
    if (this.expandedSkillID === skillId) {
      this.expandedSkillID = null; // Collapse if already expanded
    } else {
      this.expandedSkillID = skillId; // Expand otherwise
      this.getEmployeesBySkill(skillId);
    }
  }

  /**
   * Filters the list of qualifications based on the search term.
   * @returns {SkillGet[]} The filtered list of qualifications.
   */
  filteredQualifications(): SkillGet[] {
    return this.skillList.filter((qualification) =>
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
}
