import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarInitComponent } from './toolbar-init.component';

describe('ToolbarInitComponent', () => {
  let component: ToolbarInitComponent;
  let fixture: ComponentFixture<ToolbarInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarInitComponent]
    });
    fixture = TestBed.createComponent(ToolbarInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
