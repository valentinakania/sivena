import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Tutor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html'
})
export class TutorPage {
  mainpage = MainPage;
  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorPage');
  }
  
  login(){         
                this.nav.setRoot(TabsPage);
	}

}
