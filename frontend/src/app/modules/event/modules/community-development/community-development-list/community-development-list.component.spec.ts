import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDevelopmentListComponent } from './community-development-list.component';

describe('CommunityDevelopmentListComponent', () => {
  let component: CommunityDevelopmentListComponent;
  let fixture: ComponentFixture<CommunityDevelopmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityDevelopmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityDevelopmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
