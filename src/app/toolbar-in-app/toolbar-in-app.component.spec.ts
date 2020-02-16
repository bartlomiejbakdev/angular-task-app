import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarInAppComponent } from './toolbar-in-app.component';

describe('ToolbarInAppComponent', () => {
  let component: ToolbarInAppComponent;
  let fixture: ComponentFixture<ToolbarInAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarInAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
