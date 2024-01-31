import {SkillPost} from "./skill-post";

export interface EmployeePost {
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillSet: number[];
}
