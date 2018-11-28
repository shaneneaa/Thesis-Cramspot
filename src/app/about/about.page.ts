import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedModalPage } from '../feed-modal/feed-modal.page';



@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor( private modalController: ModalController){}

  async presentModal() {
    const modal = await this.modalController.create({
      component: FeedModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
