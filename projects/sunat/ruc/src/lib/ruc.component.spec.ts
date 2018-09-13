import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucComponent } from './ruc.component';

describe('RucComponent', () => {
  let component: RucComponent;
  let fixture: ComponentFixture<RucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
