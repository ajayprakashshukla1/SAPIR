import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellOutFormPage } from './sell-out-form';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SellOutFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SellOutFormPage),
    TranslateModule
  ],
})
export class SellOutFormPageModule {}
