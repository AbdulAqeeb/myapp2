import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreachildComponent } from './text-areachild.component';

describe('TextAreachildComponent', () => {
  let component: TextAreachildComponent;
  let fixture: ComponentFixture<TextAreachildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreachildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
