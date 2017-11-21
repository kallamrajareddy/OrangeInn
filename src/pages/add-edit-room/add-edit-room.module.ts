import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditRoomPage } from './add-edit-room';

@NgModule({
  declarations: [
    AddEditRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditRoomPage),
  ],
})
export class AddEditRoomPageModule {}
