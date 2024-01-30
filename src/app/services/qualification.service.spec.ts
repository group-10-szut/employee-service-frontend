import {TestBed} from '@angular/core/testing';

import {QualificationService} from './qualification.service';
import {SkillPost} from "../model/skill-post";
import {SkillGet} from "../model/skill-get";
import {SkillEmployees} from "../model/skill-employees";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('QualificationService', () => {
  let service: QualificationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QualificationService],
    });

    service = TestBed.inject(QualificationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update qualification by ID', () => {
    const qualificationId = 1;
    const dummySkillData: SkillPost = {skill: "Java"};
    const dummySkill: SkillGet = {id: 1, skill: "Java"};

    service.updateQualificationById(qualificationId, dummySkillData).subscribe(skill => {
      expect(skill).toEqual(dummySkill);
    });

    const req = httpTestingController.expectOne(`https://employee.szut.dev/qualifications/${qualificationId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummySkill);
  });

  it('should delete qualification by ID', () => {
    const qualificationId = 1;

    service.deleteQualificationById(qualificationId).subscribe(() => {
      // Expectations after the deletion
    });

    const req = httpTestingController.expectOne(`https://employee.szut.dev/qualifications/${qualificationId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should get qualification by ID', () => {
    const qualificationId = 1;
    const dummySkill: SkillGet = {id: 1, skill: "Java"};


    const req = httpTestingController.expectOne(`https://employee.szut.dev/qualifications/${qualificationId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySkill);
  });

  it('should create qualification', () => {
    const dummySkillData: SkillPost = {skill: "Java"};
    const dummySkill: SkillGet = {id: 1, skill: "Java"};

    service.createQualification(dummySkillData).subscribe(skill => {
      expect(skill).toEqual(dummySkill);
    });

    const req = httpTestingController.expectOne(`https://employee.szut.dev/qualifications`);
    expect(req.request.method).toBe('POST');
    req.flush(dummySkill);
  });

  it('should get qualification employees by ID', () => {
    const qualificationId = 1;
    const dummySkillEmployees: SkillEmployees = {
        qualification: {
          id: 1,
          skill: "Java"
        },
        employees: [
          {
            id: 1,
            lastName: "Doe",
            firstName: "John"
          }
        ]
      };

    service.getQualificationEmployees(qualificationId).subscribe(skillEmployees => {
      expect(skillEmployees).toEqual(dummySkillEmployees);
    });

    const req = httpTestingController.expectOne(`https://employee.szut.dev/qualifications/${qualificationId}/employees`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySkillEmployees);
  });

});
