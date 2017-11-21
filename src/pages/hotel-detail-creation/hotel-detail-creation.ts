import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelDetailCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-detail-creation',
  templateUrl: 'hotel-detail-creation.html',
})
export class HotelDetailCreationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('---------'+navParams.data.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelDetailCreationPage');
  }

}
