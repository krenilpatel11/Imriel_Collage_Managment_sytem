import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagesComponent } from './collages.component';

describe('CollagesComponent', () => {
  let component: CollagesComponent;
  let fixture: ComponentFixture<CollagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
