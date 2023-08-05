/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomImageComponent } from './random-image.component';

describe('RandomImageComponent', () => {
  let component: RandomImageComponent;
  let fixture: ComponentFixture<RandomImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
