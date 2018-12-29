import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModComponent } from './student-mod.component';

describe('StudentModComponent', () => {
  let component: StudentModComponent;
  let fixture: ComponentFixture<StudentModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
