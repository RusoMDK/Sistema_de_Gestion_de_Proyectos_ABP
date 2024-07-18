import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeconomicActivitiesListComponent } from './socioeconomic-activities-list.component';

describe('SocioeconomicActivitiesListComponent', () => {
  let component: SocioeconomicActivitiesListComponent;
  let fixture: ComponentFixture<SocioeconomicActivitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocioeconomicActivitiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioeconomicActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
