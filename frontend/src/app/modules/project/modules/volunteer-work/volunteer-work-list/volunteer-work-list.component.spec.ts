import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerWorkListComponent } from './volunteer-work-list.component';

describe('VolunteerWorkListComponent', () => {
  let component: VolunteerWorkListComponent;
  let fixture: ComponentFixture<VolunteerWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerWorkListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
