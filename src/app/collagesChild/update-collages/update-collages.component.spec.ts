import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollagesComponent } from './update-collages.component';

describe('UpdateCollagesComponent', () => {
  let component: UpdateCollagesComponent;
  let fixture: ComponentFixture<UpdateCollagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCollagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
