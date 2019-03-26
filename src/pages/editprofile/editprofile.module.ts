import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditprofilePage } from './editprofile';
//import { WebCamComponent } from 'ack-angular-webcam'; 
import { WebCamModule } from 'ack-angular-webcam';

@NgModule({
  declarations: [
    EditprofilePage
    //WebCamComponent
    
  ],
  imports: [
    IonicPageModule.forChild(EditprofilePage),
    WebCamModule
  ],
})
export class EditprofilePageModule {}
