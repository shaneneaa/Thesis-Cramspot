import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';
import { HomeModalPage } from "../home-modal/home-modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  constructor(private splashScreen: SplashScreen,private modalController: ModalController){

  }

  async presentModal() {
    console.log('shabu');
    const modal = await this.modalController.create({
      component: HomeModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngOnInit(){
    this.splashScreen.show();
    this.splashScreen.hide();
  }

}
