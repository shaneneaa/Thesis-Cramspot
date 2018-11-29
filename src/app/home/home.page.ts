import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';
import { HomeModalPage } from "../home-modal/home-modal.page";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  constructor(private splashScreen: SplashScreen,private modalController: ModalController,private alertController: AlertController){

  }

  async success() {
    const alert = await this.alertController.create({
      header: 'Check Availability',
      subHeader: 'Request Sent',
      message: 'Wait for User Response before check in. Thank you!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentModal() {
    console.log('shabu');
    const modal = await this.modalController.create({
      component: HomeModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  async checkAvailability() {
    
    const alert = await this.alertController.create({
      header: 'Check Availability',
      subHeader:'Input Date and Time of Check In.',
      inputs: [
        
        {
          name: 'checkIndate',
          type: 'date',
          min: '2018-12-01'
 
        },
        {
          name: 'checkIntime',
          type: 'time'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.success();
          }
        }
      ]
    });
    await alert.present();
    }

  ngOnInit(){
    this.splashScreen.show();
    this.splashScreen.hide();
  }

}
