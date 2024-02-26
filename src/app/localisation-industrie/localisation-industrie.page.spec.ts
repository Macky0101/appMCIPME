import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalisationIndustriePage } from './localisation-industrie.page';

describe('LocalisationIndustriePage', () => {
  let component: LocalisationIndustriePage;
  let fixture: ComponentFixture<LocalisationIndustriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalisationIndustriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
