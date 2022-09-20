import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneWorkComponent } from './stone-work.component';

describe('StoneWorkComponent', () => {
  let component: StoneWorkComponent;
  let fixture: ComponentFixture<StoneWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoneWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
