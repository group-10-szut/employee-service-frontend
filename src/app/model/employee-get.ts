import { SkillGet } from './skill-get';

export interface EmployeeGet {
  id: number;
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillSet: SkillGet[];
}
