import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditRoomDetailsPage } from './add-edit-room-details';

@NgModule({
  declarations: [
    AddEditRoomDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditRoomDetailsPage),
  ],
})
export class AddEditRoomDetailsPageModule {}
