import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { Platform, ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public base64Image : string;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { 
    this.base64Image = "assets/pic.jpg";
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Set Profile Picture',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Remove photo profile',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
            this.base64Image = "assets/pic.jpg";
          }
        },
        {
          text: 'New photo profile from gallery',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            console.log('Share clicked');
            Camera.getPicture({
                sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: Camera.EncodingType.JPEG,
                destinationType: Camera.DestinationType.DATA_URL,
            }).then((imageData) => {
              // imageData is a base64 encoded string
                this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
                console.log(err);
            });
          }
        },
        {
          text: 'New photo profile from camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('Share clicked');
            Camera.getPicture({
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType: Camera.EncodingType.JPEG,
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 160,
                targetHeight: 160,
                saveToPhotoAlbum: true
            }).then((imageData) => {
              // imageData is a base64 encoded string
                this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
                console.log(err);
            });
          }
        }
      ]
    });
    actionSheet.present();
  }

}

