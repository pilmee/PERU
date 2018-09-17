import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniComponent } from './dni.component';

describe('DniComponent', () => {
  let component: DniComponent;
  let fixture: ComponentFixture<DniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
