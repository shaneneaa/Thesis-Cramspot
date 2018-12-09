import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

  notifications;

  constructor(
    private notificationService: NotificationService,
    private alertController: AlertController,
    private datePipe: DatePipe 
     ) {}

  ngOnInit(){
    this.notificationService.fetchNotification()
      .subscribe(data=>{
        this.notifications = data;
      });
  }

  async alertAvailability(notification) {
    const alert = await this.alertController.create({
      header: 'Notification Details',
      subHeader:'Confirm if available at '+this.datePipe.transform(notification.date_time,'short'),
      message: 'details',
      buttons: [
         {
          text: 'Deny',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
          
          }
        }
      ]
    });

    await alert.present();
  }

}
