import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyOnMapPage } from './property-on-map';

@NgModule({
  declarations: [
    PropertyOnMapPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyOnMapPage),
  ],
})
export class PropertyOnMapPageModule {}
