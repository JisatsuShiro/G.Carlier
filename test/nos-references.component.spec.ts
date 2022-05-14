import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosReferencesComponent } from './nos-references.component';

describe('NosReferencesComponent', () => {
  let component: NosReferencesComponent;
  let fixture: ComponentFixture<NosReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
