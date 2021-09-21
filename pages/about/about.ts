import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  visor: String = '';

  primeiro: Number = 0;

  constructor(public navCtrl: NavController) {}

  botaoFuncaoPressionado(funcao: String) {
    this.primeiro = parseFloat(this.visor.toString());
    console.error(funcao);
  }

  botaoPressionado(digito: String) {
    this.visor = this.visor + digito.toString();
    console.warn(digito);
    console.log(this.visor);
  }
}
