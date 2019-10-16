import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentOutFormPage } from './rent-out-form';
// import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    RentOutFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RentOutFormPage),
    TranslateModule

  ],
})
export class RentOutFormPageModule {}
