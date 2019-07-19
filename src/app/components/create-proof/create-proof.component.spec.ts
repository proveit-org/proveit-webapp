import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProofComponent } from './create-proof.component';

describe('CreateProofComponent', () => {
  let component: CreateProofComponent;
  let fixture: ComponentFixture<CreateProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
