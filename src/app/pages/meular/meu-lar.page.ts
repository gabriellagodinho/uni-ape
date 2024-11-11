import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-lar',
  templateUrl: './meu-lar.page.html',
  styleUrls: ['./meu-lar.page.scss'],
})
export class MeuLarPage {
  rentalProperty = {
    address: 'Rua Exemplo, 123',
    rentAmount: 1200,
    dueDate: new Date(2024, 9, 5) // lembre-se que os meses começam em 0, então 9 é outubro
  };

  paymentHistory = [
    { date: new Date(2024, 8, 1), amount: 1200 }, // Exemplo de histórico de pagamento
    { date: new Date(2024, 7, 1), amount: 1200 }, // Pagamento anterior
  ];

  generatePayment(method: string) {
    if (method === 'boleto') {
      // Lógica para gerar boleto
      console.log('Gerando boleto...');
      alert('Boleto gerado com sucesso!');
    } else if (method === 'pix') {
      // Lógica para gerar PIX
      console.log('Iniciando pagamento via PIX...');
      alert('PIX gerado com sucesso!');
    }
  }
}
