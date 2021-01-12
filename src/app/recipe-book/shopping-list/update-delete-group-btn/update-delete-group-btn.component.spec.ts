import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteGroupBtnComponent } from './update-delete-group-btn.component';

describe('UpdateDeleteGroupBtnComponent', () => {
  let component: UpdateDeleteGroupBtnComponent;
  let fixture: ComponentFixture<UpdateDeleteGroupBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteGroupBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteGroupBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
