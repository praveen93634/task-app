import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quickabout } from './quickabout';

describe('Quickabout', () => {
  let component: Quickabout;
  let fixture: ComponentFixture<Quickabout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quickabout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quickabout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
