import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketflixComponent } from './rocketflix.component';

describe('RocketflixComponent', () => {
  let component: RocketflixComponent;
  let fixture: ComponentFixture<RocketflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketflixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
