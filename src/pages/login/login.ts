import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainPage } from '../main/main';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	mainpage = MainPage;
  constructor(public nav: NavController, public navParams: NavParams) {}

	login(){         
                this.nav.setRoot(TabsPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
