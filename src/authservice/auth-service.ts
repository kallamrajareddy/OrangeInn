import { Injectable } from "@angular/core";

import { HomePage } from '../pages/home/home';
import { HotelCreationPage } from './../pages/hotel-creation/hotel-creation';
import { LogOffPage } from './../pages/log-off/log-off';
import { LoginPage } from './../pages/login/login';
import { AddEditRoomPage } from './../pages/add-edit-room/add-edit-room';
import { CancellationPoliciesPage } from './../pages/cancellation-policies/cancellation-policies';



@Injectable()
export class AuthServices {

    private isAuthenticated: boolean = false;
    private pages: Array<PageObj>;
    private usr: userObj;

    setAuthentication(flag: boolean){
        this.isAuthenticated = flag;
    }

    getAuthentication(){
        return this.isAuthenticated;
    }

    setPages(auth: boolean){
        this.pages = [
            { title: 'Home', component: HomePage, icon_md: 'home', authFlg: false },
            { title: 'DashBord', component: HomePage, icon_md: 'apps-outline', authFlg: auth },
            { title: 'Create Hotel', component: HotelCreationPage, icon_md: 'create-outline', authFlg: auth  },
            { title: 'Edit Hotel', component: HotelCreationPage, icon_md: 'clipboard-outline', authFlg: auth  },
            { title: 'Add/Edit Room', component: AddEditRoomPage, icon_md: 'clipboard-outline', authFlg: auth  },
            { title: 'Add/Edit Rate Plan', component: HotelCreationPage, icon_md: 'notifications-outline', authFlg: auth  },
            { title: 'Cancellation Policies', component: CancellationPoliciesPage, icon_md: 'close-circle-outline', authFlg: auth  },
            { title: 'About Us', component: HotelCreationPage, icon_md: 'bulb-outline', authFlg: auth  },
            { title: 'Contact Us', component: HotelCreationPage, icon_md: 'contact-outline', authFlg: auth  },
            { title: 'LoggOff', component: LogOffPage, icon_md: 'log-out', authFlg: auth  },
            { title: 'Login', component: LoginPage, icon_md: 'log-in', authFlg: !auth  }
          ];
    }

    getPages(){
        return this.pages;
    }

    getLoggedInn(){
        if(this.usr != null && this.usr != undefined){
             if(this.usr.userName != null && this.usr.userName != undefined && this.usr.password != undefined  && this.usr.password != null){
                 return true;
             }
         }
    }

    saveUsr(usrNm: string, pass: string ){
        this.usr = {userName: usrNm, password: pass};
        //this.usr.userName = usrNm;
        //this.usr.password = pass;
    }

}

interface PageObj{
    title: string,
    component: any,
    icon_md: string,
    authFlg: boolean
  }

  interface userObj {
      userName: string,
      password: string
  }