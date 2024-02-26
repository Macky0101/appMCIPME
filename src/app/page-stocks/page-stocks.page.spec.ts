import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageStocksPage } from './page-stocks.page';

describe('PageStocksPage', () => {
  let component: PageStocksPage;
  let fixture: ComponentFixture<PageStocksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageStocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
