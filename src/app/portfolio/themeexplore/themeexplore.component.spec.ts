import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeexploreComponent } from './themeexplore.component';

describe('ThemeexploreComponent', () => {
  let component: ThemeexploreComponent;
  let fixture: ComponentFixture<ThemeexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
