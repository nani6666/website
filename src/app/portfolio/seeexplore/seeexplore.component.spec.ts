import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeexploreComponent } from './seeexplore.component';

describe('SeeexploreComponent', () => {
  let component: SeeexploreComponent;
  let fixture: ComponentFixture<SeeexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
