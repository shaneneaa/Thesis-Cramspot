import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.page.html',
  styleUrls: ['./home-modal.page.scss'],
})
export class HomeModalPage implements OnInit {

  constructor(
    private modalController:ModalController,
    private workspaceService: WorkspaceService
    ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

  post(f:NgForm){
    this.workspaceService.postWorkspace(f.value)
      .subscribe(data=>{
        
      });
  }
}
