import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignment3Component } from './show-assignment3.component';

describe('ShowAssignment3Component', () => {
  let component: ShowAssignment3Component;
  let fixture: ComponentFixture<ShowAssignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAssignment3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAssignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
