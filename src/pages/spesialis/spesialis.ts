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
	{id:"S01",name:"ANAK",description:"Spesialis mengenai penyakit anak anda",refer:"PED"},
	{id:"S02",name:"BEDAH ANAK",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada anak-anak",refer:"PED"},
	{id:"S03",name:"BEDAH DIGESTIF",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang pencernaan",refer:"SUR"},
	{id:"S06",name:"BEDAH PLASTIK",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang plastik",refer:"SUR"},
	{id:"S07",name:"BEDAH SARAF",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang saraf",refer:"NEU"},
	{id:"S08",name:"BEDAH THORAX",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada otak",refer:"SUR"},
	{id:"S09",name:"BEDAH TULANG",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada tulang",refer:"SUR"},
	{id:"S10",name:"BEDAH UMUM",description:"Konsultasi pada dokter yang menguasai pembedahan pada umumnya",refer:"SUR"},
	{id:"S11",name:"BEDAH UROLOGI",description:"Konsultasi pada dokter yang menguasai pembedahan khususnya pada bidang genital",refer:"SUR"},
	{id:"S12",name:"GIGI",description:"Spesialis mengenai gigi pada umumnya",refer:"DEN"},
	{id:"S13",name:"GIGI ANAK",description:"Spesialis mengenai gigi khususnya pada anak-anak",refer:"DEN"},
	{id:"S14",name:"GIGI BEDAH MULUT",description:"Spesialis gigi yang menguasai bedah mulut",refer:"DEN"},
	{id:"S15",name:"GIGI ORTHODONTI",description:"Spesialis gigi yang menguasai bedah mulut",refer:"DEN"},
	{id:"S16",name:"GIGI PROSTODONTI",description:"Spesialis gigi yang menguasai kasus kehilangan gigi",refer:"DEN"},
	{id:"S17",name:"GIZI",description:"Konsultasi mengenai gizi dan pola makan anda",refer:"NUT"},
	{id:"S18",name:"JANTUNG",description:"Spesialis mengenai kebaikan jantung anda",refer:"CAR"},
	{id:"S19",name:"JIWA",description:"Konsultasi mengenai masalah kejiwaan",refer:"PSY"},
	{id:"S20",name:"KULIT DAN KELAMIN",description:"Spesialis yang menguasai mengenai penyakit kulit dan kelamin",refer:"SKI"},
	{id:"S21",name:"MATA",description:"Konsultasi mengenai keadaan mata anda",refer:"OCT"},
	{id:"S22",name:"THT-KL",description:"Konsultasi mengenai keadaan telinga, hidung, dan tenggorokan",refer:"THT"},
	{id:"S23",name:"UMUM",description:"Konsultasi pada dokter umum",refer:"UMU"},
	{id:"S23",name:"PENYAKIT DALAM",description:"Konsultasi pada dokter ahli penyakit dalam: jantung, darah, ginjal, dll.",refer:"INT"},
	{id:"S23",name:"SARAF",description:"Konsultasi pada dokter ahli saraf",refer:"NEU"},
	{id:"S23",name:"PARU DAN PERNAPASAN",description:"Konsultasi pada dokter umum",refer:"UMU"},
	{id:"S23",name:"UMUM",description:"Konsultasi pada dokter umum",refer:"UMU"},
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
