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

  private chosenImage;

  constructor(
    private modalController:ModalController,
    private workspaceService: WorkspaceService
    ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

  onChangeImage(event){
    this.chosenImage = event.target.files[0];
    console.log(this.chosenImage);
  }

  post(f:NgForm){
    //attach form value to form data
    let formData = new FormData();
    Object.keys(f.value).forEach(e=>{
      formData.append(e,f.value[e]);
    });

    //append image to form data
    formData.append('workspace_image',this.chosenImage);

    this.workspaceService.postWorkspace(formData)
      .subscribe(data=>{
        
      });
  }
}
