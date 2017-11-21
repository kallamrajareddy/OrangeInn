import { Component, Injector } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthServices } from './../../authservice/auth-service';

import * as moment from 'moment';

import {   CalendarModal, CalendarModalOptions,  CalendarResult, DayConfig } from 'ion2-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public auth: AuthServices;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, private inj: Injector) {
    this.auth = inj.get(AuthServices);
    this.openCalendar();
  }
  
    openCalendar() {
      let _daysConfig: DayConfig[] = [];

      let stDt = moment(new Date("2017/12/1").getTime());
      let enDt = moment(new Date("2017/12/30").getTime());
      let days = enDt.diff(stDt, 'days');

      for (let i = 0; i < days; i++) {
        _daysConfig.push({
          date: new Date(2017, 12, i + 1),
          subTitle: `$${500000}`
        })
      }
  console.log(_daysConfig.length+'-----------------------');
      
          const options: CalendarModalOptions = {
            pickMode: 'range',
            title: 'RANGE',
                //pickMode: 'multi',
                //title: 'MULTI',
                //from: new Date(2017, 12, 5),
                //to: new Date(2017, 12, 30),
            defaultDateRange: { from: new Date("2017/12/5"), to: new Date("2017/12/30") },
                //daysConfig: _daysConfig,
                color: 'danger'
            
          };
              /* const options: CalendarModalOptions = {
                pickMode: 'range',
                title: 'RANGE'
              }; */
          
              let myCalendar = this.modalCtrl.create(CalendarModal, {
                options: options
              });
          
              myCalendar.present();
          
              myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
                console.log(date);
              });
        }
      
}
