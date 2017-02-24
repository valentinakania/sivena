import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KedokterPage } from '../kedokter/kedokter';

/*
  Generated class for the Penyakit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-penyakit',
  templateUrl: 'penyakit.html'
})
export class PenyakitPage {
searchQuery: string = '';
	kedokterpage = KedokterPage;
	items = [];
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenyakitPage');
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
	  
	  initializeItems(){
	this.items = [
	{id:"P01",name:"ALERGI",description:"Efek samping yang tidak diketahui penyebabnya",refer:"UMU"},
	{id:"P02",name:"ASMA",description:"Penyakit pada saluran pernapasan menimbulkan sesak bernapas",refer:"UMU"},
	{id:"P03",name:"ASAM LAMBUNG",description:"Naiknya asam pada lambung sehingga mengabitkan maag",refer:"UMU"},
	{id:"P04",name:"AIDS",description:"Penyakit dikarenakan virus HIV",refer:"INT"},
	{id:"P05",name:"BATUK",description:"Sistem pertahanan saluran napas yang terganggu",refer:"UMU"},
	{id:"P06",name:"BATU GINJAL",description:"Terdapat batu penghambat pada saluran kemih",refer:"INT"},
	{id:"P07",name:"BRONKITIS",description:"Infeksi pada saluran pernapasan utama dari paru-paru",refer:"PAR"},
	{id:"P08",name:"CACAR AIR",description:"Timbulnya benjolan yang berisi air pada seluruh tubuh, gatal dan kulit yang kemerahan.",refer:"UMU"},
	{id:"P09",name:"CAMPAK",description:"Infeksi virus yang sangat menular, yang ditandai dengan demam, batuk, konjungtivitis",refer:"UMU"},
	{id:"P10",name:"DARAH KOTOR",description:"Darah yang tidak lagi mengandung oksigen ",refer:"INT"},
	{id:"P11",name:"DARAH TINGGI",description:"Tekanan darah pada dinding arteri meningkat",refer:"INT"},
	{id:"P12",name:"DARAH RENDAH",description:"Tekanan darah di dalam arteri lebih rendah dibandingkan normal",refer:"INT"},
	{id:"P13",name:"DEMAM",description:"Kondisi ketika suhu tubuh berada di atas 37.5 derajat celsius",refer:"UMU"},
	{id:"P14",name:"DIAREA",description:"Tinja atau feses berubah menjadi lembek atau cair",refer:"UMU"},
	{id:"P15",name:"DIABETES",description:"Pankreas tidak memproduksi cukup insulin",refer:"INT"},
	{id:"P16",name:"DISENTRI",description:"Infeksi pada usus yang menyebabkan diare yang disertai darah atau lendir",refer:"INT"},
	{id:"P17",name:"GIGI NGILU",description:"Gangguan ngilu pada gigi",refer:"DEN"},
	{id:"P18",name:"CABUT GIGI",description:"Ingin gigi dicabut",refer:"DEN"},
	{id:"P19",name:"SERANGAN JANTUNG",description:"Penyakit yang menyerang jantung lemah tiba-tiba",refer:"CAR"},
	{id:"P20",name:"REUMATIK",description:"Rasa sakit dalam menggerakkan suatu otot tubuh",refer:"NEU"}
	
	];
	}

}
