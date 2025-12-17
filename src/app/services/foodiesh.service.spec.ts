import { TestBed } from '@angular/core/testing';

import { FoodishService } from './foodiesh.service';
describe('FoodieshService', () => {
  let service:FoodishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
