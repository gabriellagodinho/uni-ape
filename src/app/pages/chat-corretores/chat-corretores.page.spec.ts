import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatCorretoresPage } from './chat-corretores.page';

describe('ChatCorretoresPage', () => {
  let component: ChatCorretoresPage;
  let fixture: ComponentFixture<ChatCorretoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCorretoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
