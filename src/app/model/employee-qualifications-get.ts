import {SkillPost} from "./skill-post";

export interface EmployeeQualificationsGet {
  id: number,
  lastName: string,
  firstName: string,
  skillSet: SkillPost[]
}
