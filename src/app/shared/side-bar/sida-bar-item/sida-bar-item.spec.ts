import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidaBarItem } from './sida-bar-item';

describe('SidaBarItem', () => {
  let component: SidaBarItem;
  let fixture: ComponentFixture<SidaBarItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidaBarItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SidaBarItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
