import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignment1Component } from './show-assignment1.component';

describe('ShowAssignment1Component', () => {
  let component: ShowAssignment1Component;
  let fixture: ComponentFixture<ShowAssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAssignment1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
