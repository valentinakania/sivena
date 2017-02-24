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
	{id:"S01",name:"ANAK",description:"Spesialis mengenai penyakit anak anda",refer:"PED"},ok
	{id:"S02",name:"GIGI",description:"Spesialis mengenai gigi pada umumnya",refer:"DEN"},ok
	{id:"S03",name:"GIZI",description:"Konsultasi mengenai gizi dan pola makan anda",refer:"NUT"},ok
	{id:"S04",name:"JANTUNG",description:"Spesialis mengenai kebaikan jantung anda",refer:"CAR"},
	{id:"S05",name:"JIWA",description:"Konsultasi mengenai masalah kejiwaan",refer:"PSY"},ok
	{id:"S06",name:"MATA",description:"Konsultasi mengenai keadaan mata anda",refer:"OCT"},
	{id:"S07",name:"THT-KL",description:"Konsultasi mengenai keadaan telinga, hidung, dan tenggorokan",refer:"THT"},ok
	{id:"S08",name:"UMUM",description:"Konsultasi pada dokter umum",refer:"UMU"},ok
	{id:"S09",name:"PENYAKIT DALAM",description:"Konsultasi pada dokter ahli penyakit dalam: jantung, darah, ginjal, dll.",refer:"INT"},
	{id:"S10",name:"SARAF",description:"Konsultasi pada dokter ahli saraf",refer:"NEU"},
	{id:"S11",name:"PARU DAN PERNAPASAN",description:"Konsultasi pada dokter umum",refer:"PAR"}
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
