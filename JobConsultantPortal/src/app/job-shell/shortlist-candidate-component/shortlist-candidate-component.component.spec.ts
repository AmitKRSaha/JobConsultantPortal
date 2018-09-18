import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistCandidateComponentComponent } from './shortlist-candidate-component.component';

describe('ShortlistCandidateComponentComponent', () => {
  let component: ShortlistCandidateComponentComponent;
  let fixture: ComponentFixture<ShortlistCandidateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistCandidateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistCandidateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
