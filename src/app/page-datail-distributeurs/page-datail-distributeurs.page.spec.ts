import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDatailDistributeursPage } from './page-datail-distributeurs.page';

describe('PageDatailDistributeursPage', () => {
  let component: PageDatailDistributeursPage;
  let fixture: ComponentFixture<PageDatailDistributeursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageDatailDistributeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
