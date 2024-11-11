import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepassesPage } from './repasses.page';

describe('RepassesPage', () => {
  let component: RepassesPage;
  let fixture: ComponentFixture<RepassesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
