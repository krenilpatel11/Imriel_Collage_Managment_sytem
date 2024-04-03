import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagesCreateComponent } from './collages-create.component';

describe('CollagesCreateComponent', () => {
  let component: CollagesCreateComponent;
  let fixture: ComponentFixture<CollagesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollagesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollagesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
