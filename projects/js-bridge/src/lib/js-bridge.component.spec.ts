import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBridgeComponent } from './js-bridge.component';

describe('JsBridgeComponent', () => {
  let component: JsBridgeComponent;
  let fixture: ComponentFixture<JsBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
