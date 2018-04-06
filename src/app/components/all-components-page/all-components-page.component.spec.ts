import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponentsPageComponent } from './all-components-page.component';

describe('AllComponentsPageComponent', () => {
  let component: AllComponentsPageComponent;
  let fixture: ComponentFixture<AllComponentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComponentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
