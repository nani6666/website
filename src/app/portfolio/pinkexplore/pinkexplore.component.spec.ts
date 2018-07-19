import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkexploreComponent } from './pinkexplore.component';

describe('PinkexploreComponent', () => {
  let component: PinkexploreComponent;
  let fixture: ComponentFixture<PinkexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
