import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyFilterPage } from './property-filter';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PropertyFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyFilterPage),
    TranslateModule
  ],
})
export class PropertyFilterPageModule {}
