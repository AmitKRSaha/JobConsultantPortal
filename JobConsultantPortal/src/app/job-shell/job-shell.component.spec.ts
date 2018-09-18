import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { JobShellComponent } from './job-shell.component';

describe('JobShellComponent', () => {
  let component: JobShellComponent;
  let fixture: ComponentFixture<JobShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobShellComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobShellComponent);
    component = fixture.componentInstance;
    component.postedJobs = [{
      id: 1,
      name: 'IT Soft',
      Title : 'Java Eng',
      Date_Posted : '20-8-13',
      Status : 'Open'
    }];
    component.opensection = {
      postedJobs : 'open'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
