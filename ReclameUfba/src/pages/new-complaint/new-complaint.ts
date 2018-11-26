import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-new-complaint',
  templateUrl: 'new-complaint.html',
})
export class NewComplaintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewComplaintPage');
  }

  openPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
