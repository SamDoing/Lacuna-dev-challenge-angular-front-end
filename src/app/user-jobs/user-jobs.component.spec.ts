/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserJobsComponent } from './user-jobs.component';

describe('UserJobsComponent', () => {
  let component: UserJobsComponent;
  let fixture: ComponentFixture<UserJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
