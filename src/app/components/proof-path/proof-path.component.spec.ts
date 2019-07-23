import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPathComponent } from './proof-path.component';

describe('ProofPathComponent', () => {
  let component: ProofPathComponent;
  let fixture: ComponentFixture<ProofPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should verify', () => {
    expect(component).toBeTruthy();
  });
});
