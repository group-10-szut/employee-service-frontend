import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillGet} from '../../model/skill-get';
import {AddEmployeeButtonComponent} from '../buttons/add-employee-button/add-employee-button.component';
import {
  AddQualificationButtonComponent
} from '../buttons/add-qualification-button/add-qualification-button.component';
import {FooterComponent} from '../footer/footer.component';
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [CommonModule, AddEmployeeButtonComponent, AddQualificationButtonComponent, FooterComponent],
  templateUrl: './qualification-list.component.html',
  styleUrl: './qualification-list.component.css',
})
export class QualificationListComponent {

  isFormularShowed: boolean = false;

  constructor(public shareService: ShareService) {
    this.shareService.isQualificationFormShowed.subscribe(
      currentStatus => this.isFormularShowed = currentStatus);
  }

  expandedSkillID: number | null = null;

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
}
