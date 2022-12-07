import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketnewsComponent } from './rocketnews.component';

describe('RocketnewsComponent', () => {
  let component: RocketnewsComponent;
  let fixture: ComponentFixture<RocketnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
