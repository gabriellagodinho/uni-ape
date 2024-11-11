import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatInquilinoPage } from './chat-inquilino.page';

describe('ChatInquilinoPage', () => {
  let component: ChatInquilinoPage;
  let fixture: ComponentFixture<ChatInquilinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInquilinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
