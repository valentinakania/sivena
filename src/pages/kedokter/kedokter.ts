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
    { id: "D01", name: "dr. Aron Husink Sp.JP FIHA", lat: ,lon: , institution:"Mayapada Hospital Tangerang", email:"kaniaprameswara5@gmail.com", phone: "6285727782299", price:180, ref:"NUT"},
    { id: "D01", name: "dr. Setiawan, SpTHT-KL", lat:,lon:, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 100, ref: "THT"},
    { id: "D01", name: "dr. Megan Triawan, SpTHT", lat:,lon:, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299",price: 100, ref: "THT"},
    { id: "D01", name: "dr. Takta Wibawa, SpTHT", lat:,lon:, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299",price: 90, ref: "THT"},
    { id: "D01", name: "dr. Yudho Setiawan, SpTHT", lat:,lon:, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 90, ref: "THT"},
    { id: "D01", name: "dr. Eka Azwinda", lat: -6.2875674,lon: 106.7913159, institusi: "", email:"kaniaprameswara5@gmail.com", phone: "6285727782299", price: 150, ref: "UMU"},
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D01", name: "dr. Luthfan", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
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
