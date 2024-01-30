import {SkillPost} from "./skill-post";

export class EmployeePost {
  constructor(public lastName: string, public firstName: string,
              public street: string, public postcode: string,
              public city: string, public phone: string,
              public skillSet: SkillPost[]) {
  }
}
