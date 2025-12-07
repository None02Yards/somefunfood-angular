import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosStripComponent } from './logos-strip.component';

describe('LogosStripComponent', () => {
  let component: LogosStripComponent;
  let fixture: ComponentFixture<LogosStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosStripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
