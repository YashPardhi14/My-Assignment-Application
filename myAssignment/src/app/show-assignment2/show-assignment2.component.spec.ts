import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignment2Component } from './show-assignment2.component';

describe('ShowAssignment2Component', () => {
  let component: ShowAssignment2Component;
  let fixture: ComponentFixture<ShowAssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAssignment2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
