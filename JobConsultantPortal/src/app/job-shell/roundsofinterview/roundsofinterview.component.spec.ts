import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsofinterviewComponent } from './roundsofinterview.component';

describe('RoundsofinterviewComponent', () => {
  let component: RoundsofinterviewComponent;
  let fixture: ComponentFixture<RoundsofinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsofinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsofinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
