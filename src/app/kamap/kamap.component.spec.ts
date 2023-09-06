import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamapComponent } from './kamap.component';

describe('KamapComponent', () => {
  let component: KamapComponent;
  let fixture: ComponentFixture<KamapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
