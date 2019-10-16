import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MylistingPage } from './mylisting';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MylistingPage,
  ],
  imports: [
    IonicPageModule.forChild(MylistingPage),
    TranslateModule
  ],
})
export class MylistingPageModule {}
