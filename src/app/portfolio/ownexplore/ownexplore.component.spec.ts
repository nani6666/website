import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnexploreComponent } from './ownexplore.component';

describe('OwnexploreComponent', () => {
  let component: OwnexploreComponent;
  let fixture: ComponentFixture<OwnexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
