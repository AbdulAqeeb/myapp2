import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCarditemComponent } from './child-carditem.component';

describe('ChildCarditemComponent', () => {
  let component: ChildCarditemComponent;
  let fixture: ComponentFixture<ChildCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCarditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
