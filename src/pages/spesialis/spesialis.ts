import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KedokterPage } from '../kedokter/kedokter';

/*
  Generated class for the Spesialis page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-spesialis',
  templateUrl: 'spesialis.html'
  
})
export class SpesialisPage {
	searchQuery: string = '';
	kedokterpage = KedokterPage;
	items = [];
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeItems();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SpesialisPage');
  }
  
  initializeItems(){
	this.items = [
	{name:"ANAK", 			exp:"Spesialis mengenai penyakit anak anda"},
	{name:"BEDAH ANAK",		exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada anak-anak"},
	{name:"BEDAH DIGESTIF",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang pencernaan"},
	{name:"BEDAH ONKOLOGI",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang kanker"},
	{name:"BEDAH ORTHOPEDI",exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang gigi"},
	{name:"BEDAH PLASTIK",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang plastik"},
	{name:"BEDAH SARAF",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang saraf"},
	{name:"BEDAH THORAX",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada otak"},
	{name:"BEDAH TULANG",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada tulang"},
	{name:"BEDAH UMUM",		exp:"Konsultasi pada dokter yang menguasai pembedahan pada umumnya"},
	{name:"BEDAH UROLOGI",	exp:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang genital"},
	{name:"GIGI",			exp:"Spesialis mengenai gigi pada umumnya"},
	{name:"GIGI ANAK",		exp:"Spesialis mengenai gigi khususnya pada anak-anak"},
	{name:"GIGI BEDAH MULUT",exp:"Spesialis gigi yang menguasai bedah mulut"},
	{name:"GIGI ORTHODONTI",exp:"Spesialis gigi yang menguasai bedah mulut"},
	{name:"GIGI PROSTODONTI",exp:"Spesialis gigi yang menguasai kasus kehilangan gigi"},
	{name:"GIZI",			exp:"Konsultasi mengenai gizi dan pola makan anda"},
	{name:"JANTUNG",		exp:"Spesialis mengenai kebaikan jantung anda"},
	{name:"JIWA",			exp:"Konsultasi mengenai masalah kejiwaan"},
	{name:"KULIT DAN KELAMIN",exp:"Spesialis yang menguasai mengenai penyakit kulit dan kelamin"},
	{name:"MATA",			exp:"Konsultasi mengenai keadaan mata anda"},
	{name:"THT-KL",			exp:"Konsultasi mengenai keadaan telinga, hidung, dan tenggorokan"},
	{name:"UMUM",			exp:"Konsultasi pada dokter umum"},
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
