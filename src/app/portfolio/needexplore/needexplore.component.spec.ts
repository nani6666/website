import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedexploreComponent } from './needexplore.component';

describe('NeedexploreComponent', () => {
  let component: NeedexploreComponent;
  let fixture: ComponentFixture<NeedexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
