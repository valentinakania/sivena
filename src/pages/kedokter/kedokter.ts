import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoPage }  from '../info/info';

/*
  Generated class for the Kedokter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kedokter',
  templateUrl: 'kedokter.html'
})
export class KedokterPage {
	infopage = InfoPage;
	searchQuery: string = '';
	items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.initializeItems();}

  ionViewDidLoad() {
    console.log('ionViewDidLoad KedokterPage');
  }
  
  initializeItems(){
	this.items = [
	{name:"dr. Achmad Suryo, SpTHT-KL",distance:"0.1 km", price:"80 K"},
	{name:"dr. Setiawan, SpTHT-KL",distance:"1.3 km", price:"100 K"},
	{name:"dr. Megan Triawan, SpTHT",distance:"1.8 km", price:"100 K"},
	{name:"dr. Takta Wibawa, SpTHT",distance:"1.8 km", price:"90 K"},
	{name:"dr. Yudho Setiawan, SpTHT",distance:"1.8 km", price:"160 K"},
	{name:"dr. Tri Rasyad",distance:"4 km", price:"100 K"},
	{name:"dr. Luthfan",distance:"4.3 km", price:"120 K"}
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
