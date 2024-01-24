export interface EmployeePost {
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillSet: number[];  // NOTE: employees backend endpoint awaits a list of ids
}
