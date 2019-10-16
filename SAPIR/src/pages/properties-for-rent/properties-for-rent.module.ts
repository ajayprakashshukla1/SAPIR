import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertiesForRentPage } from './properties-for-rent';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PropertiesForRentPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertiesForRentPage),
    TranslateModule
  ],
})
export class PropertiesForRentPageModule {}
