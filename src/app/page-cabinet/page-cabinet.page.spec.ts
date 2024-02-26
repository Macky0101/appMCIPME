import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCabinetPage } from './page-cabinet.page';

describe('PageCabinetPage', () => {
  let component: PageCabinetPage;
  let fixture: ComponentFixture<PageCabinetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageCabinetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
