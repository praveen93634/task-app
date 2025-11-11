import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfeature } from './hfeature';

describe('Hfeature', () => {
  let component: Hfeature;
  let fixture: ComponentFixture<Hfeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hfeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hfeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
