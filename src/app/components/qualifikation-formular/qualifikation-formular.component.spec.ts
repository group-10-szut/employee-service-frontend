import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifikationFormularComponent } from './qualifikation-formular.component';

describe('QualifikationFormularComponent', () => {
  let component: QualifikationFormularComponent;
  let fixture: ComponentFixture<QualifikationFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualifikationFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualifikationFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
