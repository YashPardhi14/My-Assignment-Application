import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BChildComponent } from './b-child.component';

describe('BChildComponent', () => {
  let component: BChildComponent;
  let fixture: ComponentFixture<BChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
