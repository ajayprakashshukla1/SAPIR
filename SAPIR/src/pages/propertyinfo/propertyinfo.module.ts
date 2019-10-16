import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyinfoPage } from './propertyinfo';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PropertyinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyinfoPage),
    TranslateModule
  ],
})
export class PropertyinfoPageModule {}
