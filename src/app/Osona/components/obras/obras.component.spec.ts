import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasComponent } from './obras.component';

describe('ObrasComponent', () => {
  let component: ObrasComponent;
  let fixture: ComponentFixture<ObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
