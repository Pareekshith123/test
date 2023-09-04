import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayFromContractorComponent } from './delay-from-contractor.component';

describe('DelayFromContractorComponent', () => {
  let component: DelayFromContractorComponent;
  let fixture: ComponentFixture<DelayFromContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayFromContractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayFromContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
