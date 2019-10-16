import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermprivacyPage } from './termprivacy';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TermprivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(TermprivacyPage),
    TranslateModule
  ],
})
export class TermprivacyPageModule {}
