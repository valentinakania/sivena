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
    { id: "D01", name: "dr. Aron Husink Sp.JP FIHA", lat:-6.2049806 ,lon:106.639349 , institution:"Mayapada Hospital Tangerang", email:"kaniaprameswara5@gmail.com", phone: "6285727782299", price:180, ref:"NUT"},
    { id: "D02", name: "dr. Setiawan, SpTHT-KL", lat:-6.2982379,lon:106.2732862, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 235, ref: "THT"},
    { id: "D03", name: "dr. Eka Azwinda", lat: -6.2875674,lon: 106.7913159, institusi: "Praktik", email:"kaniaprameswara5@gmail.com", phone: "6285727782299", price: 150, ref: "UMU"},
    { id: "D04", name: "dr. Christine . SpKFR", lat: -6.2986179, lon: 106.7858507, institusi: "Mayapada Hospital Jakarta Selatan", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "PSY" },
    { id: "D05", name: "drg. Maya Indriyani", lat: -6.208791, lon: 106.8171713, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 270, ref: "DEN" },
    { id: "D06", name: "drg. Lucy Chandra", lat: -6.208791, lon: 106.8171713, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 250, ref: "DEN" },
    { id: "D07", name: "dr. Metty Anastasia", lat: -6.208791, lon: -6.208791, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 250, ref: "DEN" },
    { id: "D08", name: "Dr. Engkie SpA", lat: -6.2096843, lon: 106.7893314, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 160, ref: "PED" },
    { id: "D09", name: "Dr. Husein Alatas SpA", lat:-6.2096843, lon: 106.7893314, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "PED" },
    { id: "D10", name: "Dr. Ferdinand Tumewu, SpM", lat: -6.1927869, lon: 106.8343066, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "OCT" },
    { id: "D11", name: "Dr. Indra, SpPD", lat: -6.2545607, lon: 106.7972967, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "INT" },
    { id: "D12", name: "dr. Achmad Faisal, Sp BTKV", lat: -6.2875674, lon: 106.6272915, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "CAR" },
    { id: "D13", name: "dr. Achmad Fauzi, Sp.PD-KGEH", lat: -6.2875674, lon: -6.2875674, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "INT" },
    { id: "D14", name: "dr. Ignatius Adhiarta, SpPD", lat: -6.1816833, lon: 106.7821975, institusi: "", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D15", name: "dr. Frida Trisbiantara", lat: -6.1816833, lon: -6.1816833, institusi: "MRCCC Siloam Hospital Semanggi", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" },
    { id: "D16", name: "dr. Hasan Basri", lat: -6.1816742, lon: 106.7821973, institusi: "Siloam Hospital Kebon Jeruk", email: "kaniaprameswara5@gmail.com", phone: "6285727782299", price: 120, ref: "UMU" }
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
