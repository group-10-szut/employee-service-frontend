import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationFormularComponent } from './add-qualification-formular.component';

describe('QualifikationFormularComponent', () => {
  let component: AddQualificationFormularComponent;
  let fixture: ComponentFixture<AddQualificationFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQualificationFormularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualificationFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
