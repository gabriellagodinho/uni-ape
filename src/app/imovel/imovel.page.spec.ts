import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImovelPage } from './imovel.page';

describe('ImovelPage', () => {
  let component: ImovelPage;
  let fixture: ComponentFixture<ImovelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
