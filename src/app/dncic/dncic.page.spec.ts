import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DNCICPage } from './dncic.page';

describe('DNCICPage', () => {
  let component: DNCICPage;
  let fixture: ComponentFixture<DNCICPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DNCICPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
