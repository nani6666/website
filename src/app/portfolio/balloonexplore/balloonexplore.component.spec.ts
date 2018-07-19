import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonexploreComponent } from './balloonexplore.component';

describe('BalloonexploreComponent', () => {
  let component: BalloonexploreComponent;
  let fixture: ComponentFixture<BalloonexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
