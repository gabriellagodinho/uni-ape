import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImoveisAnunciadosPage } from './imoveis-anunciados.page';

describe('ImoveisAnunciadosPage', () => {
  let component: ImoveisAnunciadosPage;
  let fixture: ComponentFixture<ImoveisAnunciadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisAnunciadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
