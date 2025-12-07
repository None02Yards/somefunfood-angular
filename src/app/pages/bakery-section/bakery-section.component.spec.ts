import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerySectionComponent } from './bakery-section.component';

describe('BakerySectionComponent', () => {
  let component: BakerySectionComponent;
  let fixture: ComponentFixture<BakerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakerySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
