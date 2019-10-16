import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    TranslateModule,
  ],
})
export class MessagesPageModule {}
