import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor';

/*
  Generated class for the Masuk page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-masuk',
  templateUrl: 'masuk.html'
})
export class MasukPage {
  tutorpage = TutorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukPage');
  }

}
