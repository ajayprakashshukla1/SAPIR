import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnernamePage } from './ownername';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    OwnernamePage,
  ],
  imports: [
    IonicPageModule.forChild(OwnernamePage),
    TranslateModule
  ],
})
export class OwnernamePageModule {}
