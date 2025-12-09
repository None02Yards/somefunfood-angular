import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubandComponent } from './menuband.component';

describe('MenubandComponent', () => {
  let component: MenubandComponent;
  let fixture: ComponentFixture<MenubandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
