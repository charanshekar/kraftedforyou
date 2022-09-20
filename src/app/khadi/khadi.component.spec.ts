import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadiComponent } from './khadi.component';

describe('KhadiComponent', () => {
  let component: KhadiComponent;
  let fixture: ComponentFixture<KhadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
