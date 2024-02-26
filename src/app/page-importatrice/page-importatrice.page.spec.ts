import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageImportatricePage } from './page-importatrice.page';

describe('PageImportatricePage', () => {
  let component: PageImportatricePage;
  let fixture: ComponentFixture<PageImportatricePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageImportatricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
