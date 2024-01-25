import {SkillGet} from "../model/skill-get";
import {SkillPost} from "../model/skill-post";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {SkillEmployees} from "../model/skill-employees";

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  private baseUrl = 'https://employee.szut.dev/qualifications';

  constructor(private http: HttpClient) {
  }

  /**
   * @param id - The ID of the qualification to update.
   * @param skillData - The data to update for the qualification.
   * @returns Observable<SkillGet> - An observable containing the updated qualification data.
   */
  updateQualificationById(id: number, skillData: SkillPost): Observable<SkillGet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<SkillGet>(url, skillData);
  }

  /**
   * @param id - The ID of the qualification to delete.
   * @returns Observable<void> - An observable indicating the success of the deletion.
   */
  deleteQualificationById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  /**
   * @returns Observable<SkillGet[]> - An observable containing the qualification data.
   */
  getQualifications(): Observable<SkillGet[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<SkillGet[]>(url);
  }

  /**
   * @param skillData - The data for the new qualification.
   * @returns Observable<SkillGet> - An observable containing the created qualification data.
   */
  createQualification(skillData: SkillPost): Observable<SkillGet> {
    return this.http.post<SkillGet>(this.baseUrl, skillData);
  }

  /**
   * @param id - The ID of the qualification to retrieve employees for.
   * @returns Observable<SkillEmployees> - An observable containing the employees with the specified qualification.
   */
  getQualificationEmployees(id: number): Observable<SkillEmployees> {
    const url = `${this.baseUrl}/${id}/employees`;
    return this.http.get<SkillEmployees>(url);
  }
}
