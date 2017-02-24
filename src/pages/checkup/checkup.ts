import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';

/*
  Generated class for the Checkup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkup',
  templateUrl: 'checkup.html'
})
export class CheckupPage {
	searchQuery: string = '';
	infopage = InfoPage;
  	items = [];
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckupPage');
  }

	initializeItems(){
	this.items = [
	{id:"C01",name:"HEART SCREENING",description:"",price:688,refer:"HEA"},
	{id:"C02",name:"MRI SCAN",description:"",price:2000,refer:"MRI"},
	{id:"C01",name:"SIMPLE PACKAGE",description:"",price:850,refer:"SIM"},
	{id:"C01",name:"BASIC PACKAGE",description:"",price:2000,refer:"BAS"},
	{id:"C01",name:"SILVER PACKAGE",description:"",price:1900,refer:"SIL"},
	{id:"C01",name:"GOLD PACKAGE",description:"",price:2900,refer:"GOL"},
	{id:"C01",name:"PLATINUM PACKAGE",description:"",price:3600,refer:"PLA"},
	{id:"C01",name:"OSTEOPOROSIS SCR",description:"",price:550,refer:"OST"},
	{id:"C01",name:"DIGESTIVE CHECK-UP",description:"",price:1600,refer:"DIG"},
	{id:"C01",name:"CANCER EARLY DETECT",description:"",price:4000,refer:"CAN"},
	{id:"C01",name:"CT SCAN",description:"",price:1500,refer:"FCA"}
	];
	}
	
	getItems(ev: any) {
		this.initializeItems();
	
		let val = ev.target.value;
	
		if (val && val.trim() != '') {
		  this.items = this.items.filter((item) => {
			return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
		  })
		}
	  }
	  
}
