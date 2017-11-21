import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailCreationPage } from './hotel-detail-creation';

@NgModule({
  declarations: [
    HotelDetailCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailCreationPage),
  ],
})
export class HotelDetailCreationPageModule {}
