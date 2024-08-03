import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCarditemComponent } from './parent-carditem.component';

describe('ParentCarditemComponent', () => {
  let component: ParentCarditemComponent;
  let fixture: ComponentFixture<ParentCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCarditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
