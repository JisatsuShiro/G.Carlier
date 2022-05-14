import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActualitesComponent } from './nos-actualites.component';

describe('NosActualitesComponent', () => {
  let component: NosActualitesComponent;
  let fixture: ComponentFixture<NosActualitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosActualitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
