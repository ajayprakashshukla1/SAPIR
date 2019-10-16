import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StilllookingPage } from './stilllooking';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    StilllookingPage,
  ],
  imports: [
    IonicPageModule.forChild(StilllookingPage),
    TranslateModule
  ],
})
export class StilllookingPageModule {}
