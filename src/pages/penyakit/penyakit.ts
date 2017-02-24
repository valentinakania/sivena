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
	{name:"ALERGI", 		exp:"Efek samping yang tidak diketahui penyebabnya"},
	{name:"ASMA",			exp:"Penyakit pada saluran pernapasan menimbulkan sesak bernapas"},
	{name:"ASAM LAMBUNG",	exp:"Naiknya asam pada lambung sehingga mengabitkan maag"},
	{name:"AIDS",			exp:"Penyakit dikarenakan virus HIV"},
	{name:"BATUK",			exp:"Sistem pertahanan saluran napas yang terganggu"},
	{name:"BATU GINJAL",	exp:"Terdapat batu penghambat pada saluran kemih"},
	{name:"BRONKITIS",		exp:"Infeksi pada saluran pernapasan utama dari paru-paru"},
	{name:"CACAR AIR",		exp:"Timbulnya benjolan yang berisi air pada seluruh tubuh, gatal dan kulit yang kemerahan."},
	{name:"CAMPAK",			exp:"Infeksi virus yang sangat menular, yang ditandai dengan demam, batuk, konjungtivitis"},
	{name:"DARAH KOTOR",	exp:"Darah yang tidak lagi mengandung oksigen "},
	{name:"DARAH TINGGI",	exp:"Tekanan darah pada dinding arteri meningkat"},
	{name:"DARAH RENDAH",	exp:"Tekanan darah di dalam arteri lebih rendah dibandingkan normal"},
	{name:"DEMAM",			exp:"Kondisi ketika suhu tubuh berada di atas 37.5 derajat celsius"},
	{name:"DEMENTIA",		exp:"Memori jangka pendek, pikiran, kemampuan berbicara dan kemampuan motorik terpengaruh"},
	{name:"DIAREA",			exp:"Tinja atau feses berubah menjadi lembek atau cair"},
	{name:"DIABETES",		exp:"Pankreas tidak memproduksi cukup insulin"},
	{name:"DISENTRI",		exp:"Infeksi pada usus yang menyebabkan diare yang disertai darah atau lendir"},
	{name:"DISELEKSIA",		exp:"Gangguan kemampuan membaca dan menulis"},
	];
	}

}
