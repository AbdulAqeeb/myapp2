import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployestableComponent } from './employestable.component';

describe('EmployestableComponent', () => {
  let component: EmployestableComponent;
  let fixture: ComponentFixture<EmployestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployestableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
