import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjudaAtendimentoPage } from './ajuda-atendimento.page';

describe('AjudaAtendimentoPage', () => {
  let component: AjudaAtendimentoPage;
  let fixture: ComponentFixture<AjudaAtendimentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudaAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
