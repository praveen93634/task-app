import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numberspeaks } from './numberspeaks';

describe('Numberspeaks', () => {
  let component: Numberspeaks;
  let fixture: ComponentFixture<Numberspeaks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numberspeaks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Numberspeaks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
