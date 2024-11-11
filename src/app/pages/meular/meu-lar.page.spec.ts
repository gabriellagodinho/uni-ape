import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuLarPage } from './meu-lar.page';

describe('MeuLarPage', () => {
  let component: MeuLarPage;
  let fixture: ComponentFixture<MeuLarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuLarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
