import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupButtonComponent } from './add-group-button.component';

describe('AddGroupButtonComponent', () => {
  let component: AddGroupButtonComponent;
  let fixture: ComponentFixture<AddGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
