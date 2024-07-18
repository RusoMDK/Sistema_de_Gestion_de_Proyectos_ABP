import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitizationActivityDetailComponent } from './sensitization-activity-detail.component';

describe('SensitizationActivityDetailComponent', () => {
  let component: SensitizationActivityDetailComponent;
  let fixture: ComponentFixture<SensitizationActivityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensitizationActivityDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitizationActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
