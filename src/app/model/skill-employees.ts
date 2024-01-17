import {SkillGet} from "./skill-get";

export interface SkillEmployees {
  qualification: SkillGet,
  employees: {
    id: number,
    lastName: string,
    firstName:string
  }[]
}
