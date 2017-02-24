import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { CheckupPage } from '../checkup/checkup';
import { SpesialisPage } from '../spesialis/spesialis';
import { PenyakitPage } from '../penyakit/penyakit';

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
checkuppage = CheckupPage;
spesialispage = SpesialisPage;
penyakitpage = PenyakitPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
