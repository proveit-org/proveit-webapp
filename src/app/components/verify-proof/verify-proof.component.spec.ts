import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyProofComponent } from './verify-proof.component';

describe('VerifyProofComponent', () => {
  let component: VerifyProofComponent;
  let fixture: ComponentFixture<VerifyProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should verify', () => {
    expect(component).toBeTruthy();
  });
});
