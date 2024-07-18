import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDevelopmentDetailComponent } from './community-development-detail.component';

describe('CommunityDevelopmentDetailComponent', () => {
  let component: CommunityDevelopmentDetailComponent;
  let fixture: ComponentFixture<CommunityDevelopmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityDevelopmentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityDevelopmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
