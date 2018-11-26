import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewComplaintPage } from './new-complaint';

@NgModule({
  declarations: [
    NewComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(NewComplaintPage),
  ],
})
export class NewComplaintPageModule {}
