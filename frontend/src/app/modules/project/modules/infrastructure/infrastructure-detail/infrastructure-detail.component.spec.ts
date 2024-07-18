import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureDetailComponent } from './infrastructure-detail.component';

describe('InfrastructureDetailComponent', () => {
  let component: InfrastructureDetailComponent;
  let fixture: ComponentFixture<InfrastructureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastructureDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
