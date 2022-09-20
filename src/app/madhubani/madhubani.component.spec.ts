import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhubaniComponent } from './madhubani.component';

describe('MadhubaniComponent', () => {
  let component: MadhubaniComponent;
  let fixture: ComponentFixture<MadhubaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadhubaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadhubaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
