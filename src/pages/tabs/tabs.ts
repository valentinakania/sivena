import { Component } from '@angular/core';
import { MainPage } from '../main/main';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';
import { SettingPage } from '../setting/setting';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
	
	tab1Root: any = MainPage;
	tab2Root: any = HistoryPage;
	tab3Root: any = ProfilePage;
	tab4Root: any = SettingPage;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
