import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActualitesDetailComponent } from './nos-actualites-detail.component';

describe('NosActualitesDetailComponent', () => {
  let component: NosActualitesDetailComponent;
  let fixture: ComponentFixture<NosActualitesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosActualitesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosActualitesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
