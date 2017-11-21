import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelCreationPage } from './hotel-creation';

@NgModule({
  declarations: [
    HotelCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelCreationPage),
  ],
})
export class HotelCreationPageModule {}
