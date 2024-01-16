export interface IEmployee {
  id: number;
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillSet: Skill[];
}

export interface Skill {
  skill: string;
  id: number;
}
