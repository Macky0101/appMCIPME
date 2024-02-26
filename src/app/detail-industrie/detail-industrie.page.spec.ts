import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailIndustriePage } from './detail-industrie.page';

describe('DetailIndustriePage', () => {
  let component: DetailIndustriePage;
  let fixture: ComponentFixture<DetailIndustriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailIndustriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
