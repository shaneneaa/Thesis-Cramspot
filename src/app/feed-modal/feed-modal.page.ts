import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed-modal',
  templateUrl: './feed-modal.page.html',
  styleUrls: ['./feed-modal.page.scss'],
})
export class FeedModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  dismissss(){
    this.modalController.dismiss();
  }

}
