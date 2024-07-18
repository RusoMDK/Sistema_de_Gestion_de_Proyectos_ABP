import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeconomicActivitiesDetailComponent } from './socioeconomic-activities-detail.component';

describe('SocioeconomicActivitiesDetailComponent', () => {
  let component: SocioeconomicActivitiesDetailComponent;
  let fixture: ComponentFixture<SocioeconomicActivitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocioeconomicActivitiesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioeconomicActivitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
