import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCollagesComponent } from './get-collages.component';

describe('GetCollagesComponent', () => {
  let component: GetCollagesComponent;
  let fixture: ComponentFixture<GetCollagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCollagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCollagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
