import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
    IonicModule
  ],
})
export class IntroPageModule { }
