import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Silbling3Component } from './silbling3.component';

describe('Silbling3Component', () => {
  let component: Silbling3Component;
  let fixture: ComponentFixture<Silbling3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Silbling3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Silbling3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
