import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importação necessária para o AlertController
import { Router } from '@angular/router'; // Para navegar entre as páginas

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  // Função para exibir o alerta com as opções de login
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escolha uma opção',
      buttons: [
        {
          text: 'Entrar com Login',
          handler: () => {
            this.router.navigate(['/login']); // Navega para a página de login
          }
        },
        {
          text: 'Continuar sem Login',
          handler: () => {
            this.router.navigate(['/main']); // Navega para a página principal sem login
          }
        }
      ]
    });

    await alert.present();
  }
}
