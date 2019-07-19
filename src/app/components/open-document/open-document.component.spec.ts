import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDocumentComponent } from './open-document.component';

describe('OpenDocumentComponent', () => {
  let component: OpenDocumentComponent;
  let fixture: ComponentFixture<OpenDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
