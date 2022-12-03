import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketcardComponent } from './rocketcard.component';

describe('RocketcardComponent', () => {
  let component: RocketcardComponent;
  let fixture: ComponentFixture<RocketcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
