import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPropertyPage } from './edit-property';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPropertyPage),
    TranslateModule
  ],
})
export class EditPropertyPageModule {}
