import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitizationActivityListComponent } from './sensitization-activity-list.component';

describe('SensitizationActivityListComponent', () => {
  let component: SensitizationActivityListComponent;
  let fixture: ComponentFixture<SensitizationActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensitizationActivityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitizationActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
