import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsViewListComponent } from './layouts-view-list.component';

describe('LayoutsViewListComponent', () => {
  let component: LayoutsViewListComponent;
  let fixture: ComponentFixture<LayoutsViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
