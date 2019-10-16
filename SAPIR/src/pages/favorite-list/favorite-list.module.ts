import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteListPage } from './favorite-list';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

@NgModule({
  declarations: [
    FavoriteListPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteListPage),
    TranslateModule
  ],
})
export class FavoriteListPageModule {}
