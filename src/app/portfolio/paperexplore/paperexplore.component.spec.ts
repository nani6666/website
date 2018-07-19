import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperexploreComponent } from './paperexplore.component';

describe('PaperexploreComponent', () => {
  let component: PaperexploreComponent;
  let fixture: ComponentFixture<PaperexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
