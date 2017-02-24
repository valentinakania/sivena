import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgIf } from '@angular2/common';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {


  data : string;
  history: string;
  // $scope;data = "whwhwh"; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.data = "cobcobcobc";
		this.history = 'sekarang';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

	funcsekarang(){
		this.history = 'sekarang';
	}
	
	funcdulu(){
		this.history = 'dulu';
	}
}
