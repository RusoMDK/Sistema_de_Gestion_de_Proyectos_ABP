import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureListComponent } from './infrastructure-list.component';

describe('InfrastructureListComponent', () => {
  let component: InfrastructureListComponent;
  let fixture: ComponentFixture<InfrastructureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastructureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
