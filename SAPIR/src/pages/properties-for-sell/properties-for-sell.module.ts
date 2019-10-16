import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertiesForSellPage } from './properties-for-sell';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PropertiesForSellPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertiesForSellPage),
    TranslateModule
  ],
})
export class PropertiesForSellPageModule {}
