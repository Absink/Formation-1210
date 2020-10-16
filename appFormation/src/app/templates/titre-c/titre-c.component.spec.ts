import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreCComponent } from './titre-c.component';

describe('TitreCComponent', () => {
  let component: TitreCComponent;
  let fixture: ComponentFixture<TitreCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitreCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
