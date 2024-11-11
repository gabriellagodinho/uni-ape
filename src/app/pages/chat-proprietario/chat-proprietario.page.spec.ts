import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatProprietarioPage } from './chat-proprietario.page';

describe('ChatProprietarioPage', () => {
  let component: ChatProprietarioPage;
  let fixture: ComponentFixture<ChatProprietarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatProprietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
