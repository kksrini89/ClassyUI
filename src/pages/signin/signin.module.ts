import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { SigninPage } from './signin';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
    IonicModule
  ],
})
export class SigninPageModule { }
