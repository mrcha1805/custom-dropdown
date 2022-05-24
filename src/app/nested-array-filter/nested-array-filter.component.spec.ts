import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedArrayFilterComponent } from './nested-array-filter.component';

describe('NestedArrayFilterComponent', () => {
  let component: NestedArrayFilterComponent;
  let fixture: ComponentFixture<NestedArrayFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedArrayFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedArrayFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
