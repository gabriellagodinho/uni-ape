import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  async login() {
    if (!this.username || !this.password) {
      // Verifica se os campos estão vazios
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos.',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.username === 'admin' && this.password === '1234') {
      // Login bem-sucedido, navega para a página home
      this.navCtrl.navigateForward('/home');
    } else {
      // Exibe um alerta se as credenciais forem inválidas
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Credenciais inválidas.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

