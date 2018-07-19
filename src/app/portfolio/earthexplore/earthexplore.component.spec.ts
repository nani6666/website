import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthexploreComponent } from './earthexplore.component';

describe('EarthexploreComponent', () => {
  let component: EarthexploreComponent;
  let fixture: ComponentFixture<EarthexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
