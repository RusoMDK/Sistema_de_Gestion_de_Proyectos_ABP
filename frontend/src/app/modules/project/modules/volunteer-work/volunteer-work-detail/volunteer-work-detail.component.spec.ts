import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerWorkDetailComponent } from './volunteer-work-detail.component';

describe('VolunteerWorkDetailComponent', () => {
  let component: VolunteerWorkDetailComponent;
  let fixture: ComponentFixture<VolunteerWorkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerWorkDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
