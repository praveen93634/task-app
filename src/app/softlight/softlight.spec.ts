import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Softlight } from './softlight';

describe('Softlight', () => {
  let component: Softlight;
  let fixture: ComponentFixture<Softlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Softlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Softlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
