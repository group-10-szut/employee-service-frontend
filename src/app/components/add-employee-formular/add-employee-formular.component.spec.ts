import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeFormularComponent } from './add-employee-formular.component';

describe('AddEmployeeFormularComponent', () => {
  let component: AddEmployeeFormularComponent;
  let fixture: ComponentFixture<AddEmployeeFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmployeeFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
