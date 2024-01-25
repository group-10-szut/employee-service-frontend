import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGet } from '../../model/skill-get';
import {
  AddQualificationButtonComponent
} from '../buttons/add-qualification-button/add-qualification-button.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [CommonModule, AddQualificationButtonComponent, FooterComponent, FormsModule],
  templateUrl: './qualification-list.component.html',
  styleUrl: './qualification-list.component.css',
})
export class QualificationListComponent {
  searchTerm: string = '';
  expandedSkillID: number | null = null;
  editSkills: SkillGet | undefined;

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
    }
  }
  skillList: SkillGet[] = [
    {
      id: 1,
      skill: 'Webentwicklung',
    },
    {
      id: 2,
      skill: 'Datenbankdesign',
    },
    {
      id: 3,
      skill: 'Projektmanagement',
    },
    {
      id: 4,
      skill: 'Qualitätssicherung',
    },
    {
      id: 5,
      skill: 'UI-Design',
    },
    {
      id: 6,
      skill: 'Backend-Entwicklung',
    },
    {
      id: 7,
      skill: 'Java',
    },
    {
      id: 8,
      skill: 'Python',
    },
    {
      id: 9,
      skill: 'C#',
    },
  ];

  /**
   * Filters the list of qualifications based on the search term.
   * @returns {SkillGet[]} The filtered list of qualifications.
   */
  filteredQualifications(): SkillGet[] {
    return this.skillList.filter(qualification =>
      this.matchSearchTerm(qualification)
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
}
