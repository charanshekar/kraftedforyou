import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjrakhComponent } from './ajrakh.component';

describe('AjrakhComponent', () => {
  let component: AjrakhComponent;
  let fixture: ComponentFixture<AjrakhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjrakhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjrakhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
