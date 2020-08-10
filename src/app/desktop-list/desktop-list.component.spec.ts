import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopListComponent } from './desktop-list.component';

describe('DesktopListComponent', () => {
  let component: DesktopListComponent;
  let fixture: ComponentFixture<DesktopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
