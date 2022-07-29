import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookApointmentComponent } from './book-apointment.component';

describe('BookApointmentComponent', () => {
  let component: BookApointmentComponent;
  let fixture: ComponentFixture<BookApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookApointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
