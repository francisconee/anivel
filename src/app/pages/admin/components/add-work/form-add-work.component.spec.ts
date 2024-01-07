import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddWorkComponent } from './form-add-work.component';

describe('FormAddWorkComponent', () => {
  let component: FormAddWorkComponent;
  let fixture: ComponentFixture<FormAddWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddWorkComponent]
    });
    fixture = TestBed.createComponent(FormAddWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
