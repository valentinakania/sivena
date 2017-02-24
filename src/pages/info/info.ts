import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  GoogleMapsMarker,
  Geolocation
} from 'ionic-native';

import { BuatjanjiPage } from '../buatjanji/buatjanji';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  buatjanjipage = BuatjanjiPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  

}
