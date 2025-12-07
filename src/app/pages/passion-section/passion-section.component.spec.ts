import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionSectionComponent } from './passion-section.component';

describe('PassionSectionComponent', () => {
  let component: PassionSectionComponent;
  let fixture: ComponentFixture<PassionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
