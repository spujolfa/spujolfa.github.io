import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageworkComponent } from './managework.component';

describe('ManageworkComponent', () => {
  let component: ManageworkComponent;
  let fixture: ComponentFixture<ManageworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
