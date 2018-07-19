import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeexploreComponent } from './freeexplore.component';

describe('FreeexploreComponent', () => {
  let component: FreeexploreComponent;
  let fixture: ComponentFixture<FreeexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
