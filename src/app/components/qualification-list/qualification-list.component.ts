import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGet } from '../../model/skill-get';

@Component({
  selector: 'app-qualification-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification-list.component.html',
  styleUrl: './qualification-list.component.css',
})
export class QualificationListComponent {
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
