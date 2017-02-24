import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MasukPage } from '../masuk/masuk';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginpage = LoginPage;
  masukpage = MasukPage;
  constructor(public navCtrl: NavController) {
    
  }

}
