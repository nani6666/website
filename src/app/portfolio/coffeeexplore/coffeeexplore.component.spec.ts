import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeexploreComponent } from './coffeeexplore.component';

describe('CoffeeexploreComponent', () => {
  let component: CoffeeexploreComponent;
  let fixture: ComponentFixture<CoffeeexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
