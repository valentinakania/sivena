import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MasukPage } from '../pages/masuk/masuk';
import { LoginPage } from '../pages/login/login';
import { TutorPage } from '../pages/tutor/tutor';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { HistoryPage } from '../pages/history/history';
import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/setting/setting';
import { SpesialisPage } from '../pages/spesialis/spesialis';
import { CheckupPage } from '../pages/checkup/checkup';
import { InfoPage } from '../pages/info/info';
import { KedokterPage } from '../pages/kedokter/kedokter';
import { PenyakitPage } from '../pages/penyakit/penyakit';
import { BuatjanjiPage } from '../pages/buatjanji/buatjanji';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
	MasukPage,
	LoginPage,
	TutorPage,
	MainPage,
	TabsPage,
	HistoryPage,
	ProfilePage,
	SettingPage,
	CheckupPage,
	InfoPage,
	SpesialisPage,
	PenyakitPage,
	KedokterPage,
	BuatjanjiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	MasukPage,
	LoginPage,
	TutorPage,
	MainPage,
	TabsPage,
	HistoryPage,
	ProfilePage,
	SettingPage,
	CheckupPage,
	InfoPage,
	SpesialisPage,
	PenyakitPage,
	KedokterPage,
	BuatjanjiPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
