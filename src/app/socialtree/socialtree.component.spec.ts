import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialtreeComponent } from './socialtree.component';

describe('SocialtreeComponent', () => {
  let component: SocialtreeComponent;
  let fixture: ComponentFixture<SocialtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialtreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
