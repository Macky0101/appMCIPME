import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitesIndustriePage } from './unites-industrie.page';

describe('UnitesIndustriePage', () => {
  let component: UnitesIndustriePage;
  let fixture: ComponentFixture<UnitesIndustriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnitesIndustriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
