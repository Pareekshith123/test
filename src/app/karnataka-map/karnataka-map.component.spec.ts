import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnatakaMapComponent } from './karnataka-map.component';

describe('KarnatakaMapComponent', () => {
  let component: KarnatakaMapComponent;
  let fixture: ComponentFixture<KarnatakaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnatakaMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarnatakaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
