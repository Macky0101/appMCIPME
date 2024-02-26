import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDistributeursPage } from './page-distributeurs.page';

describe('PageDistributeursPage', () => {
  let component: PageDistributeursPage;
  let fixture: ComponentFixture<PageDistributeursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageDistributeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
