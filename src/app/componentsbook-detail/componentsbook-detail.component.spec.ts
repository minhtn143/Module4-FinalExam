import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsbookDetailComponent } from './componentsbook-detail.component';

describe('ComponentsbookDetailComponent', () => {
  let component: ComponentsbookDetailComponent;
  let fixture: ComponentFixture<ComponentsbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
