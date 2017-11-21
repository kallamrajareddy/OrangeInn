import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HotelDetailCreationPage } from './../hotel-detail-creation/hotel-detail-creation';

@IonicPage()
@Component({
  selector: 'page-hotel-creation',
  templateUrl: 'hotel-creation.html',
})
export class HotelCreationPage {

  hotelFacilities: HotelFacilities[] = [{
    hfId: 'F001',
    fName: 'ab',
    status: false
  },{
    hfId: 'F002',
    fName: 'saddfsafsd',
    status: false
  },{
    hfId: 'F003',
    fName: 'sgasfgasgsa',
    status: false
  },{
    hfId: 'F004',
    fName: 'sdfsfgs',
    status: false
  },{
    hfId: 'F005',
    fName: 'jfjfjfj',
    status: false
  }];
  hotelItems: HotelDetails[] = [{
    fId: 'A001',
    name: 'Hotel Basic Details',
    address: 'Kallam Varipallem',
    type: 'HD',
    status: false
  },
  {
    fId: 'A002',
    name: 'Facilities',
    address: 'Kallam Varipallem',
    type: 'FC',
    status: true
  },{
    fId: 'A003',
    name: 'Check Inn/ Check Out Policy',
    address: 'Kallam Varipallem',
    type: 'CICO',
    status: false
  },{
    fId: 'A004',
    name: 'Child Policy',
    address: 'Kallam Varipallem',
    type: 'CP',
    status: false
  },{
    fId: 'A005',
    name: 'Tax and Cancellation Policy',
    address: 'Kallam Varipallem',
    type: 'TCP',
    status: false
  }/*,{
    fId: 'A006',
    name: 'Channel Details',
    address: 'Kallam Varipallem',
    type: 'CD',
    status: false
  },{
    fId: 'A006',
    name: 'Accept Terms and Conditions',
    address: 'Kallam Varipallem',
    type: 'ATC',
    status: false
  }*/
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelCreationPage');
  }
  
  itemSelected(item){
      this.navCtrl.push(HotelDetailCreationPage, item);
  }
}

export interface Hotel{
   hId: string;
    name: string;
    address: string;
    type: string;
    status: boolean;
    facilities: HotelDetails;
}
export interface HotelDetails{
   fId: string;
    name: string;
    address: string;
    type: string;
    status: boolean;
}

export interface HotelFacilities{
   hfId: string;
    fName: string;
    status: boolean;
}

export interface HotelCheckInnCheckOut{
   ciCoId: string;
    fName: string;
    status: boolean;
}

export interface HotelChildPolicy{
   hCPId: string;
    fName: string;
    status: boolean;
}

export interface HotelTaxCancelation{
   hTCId: string;
    fName: string;
    status: boolean;
}

