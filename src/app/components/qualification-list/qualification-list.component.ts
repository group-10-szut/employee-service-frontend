import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGet } from '../../model/skill-get';
import { QualificationService } from '../../services/qualification.service';
import {
  AddQualificationButtonComponent
} from '../buttons/add-qualification-button/add-qualification-button.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import {ConfirmationComponent} from "../confirmation-fenster/confirmation-fenster.component";
import {InfoFensterComponent} from "../info-fenster/info-fenster.component";

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [CommonModule, AddQualificationButtonComponent, FooterComponent, FormsModule, ConfirmationComponent, InfoFensterComponent],
  templateUrl: './qualification-list.component.html',
  styleUrl: './qualification-list.component.css',
})
export class QualificationListComponent implements OnInit{
  searchTerm: string = '';
  expandedSkillID: number | null = null;

  showConfirmation: boolean = false;
  showInfo: boolean = false;

  qualificationToDeleteId: number | null = null;
  toggleExpansion(skillId: number, index: number): void {
    if (this.expandedSkillID === skillId) {
      this.expandedSkillID = null;
    } else {
      this.expandedSkillID = skillId;
    }
  }

  skillList: SkillGet[] = [];

  constructor(private qualificationService: QualificationService) { }

  ngOnInit(): void {
    this.getQualifications();
  }

  getQualifications(): void {
    this.qualificationService.getListOfAllQualifications()
      .subscribe(qualifications => {
        this.skillList = qualifications;
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
      this.qualificationService.deleteQualificationById(this.qualificationToDeleteId!)
          .subscribe(() => {
            // Deletion successful, show info window
            this.showInfo = true;
            this.getQualifications(); // Refresh qualification list if needed
          },
              error => {
                console.error('Error deleting qualification:', error);
              }
              );
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
