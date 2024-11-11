import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importando Router

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  segmentValue = 'conversas';

  constructor(private router: Router) {} // Injetando o Router

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  navigateToChat(chatType: string) {
    // Definindo a navegação para diferentes tipos de chat
    this.router.navigate([chatType]);
  }
}
