import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsMultiFileUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-multi-file-upload',
  templateUrl: 'components-multi-file-upload.html'
})
export class ComponentsMultiFileUploadComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsMultiFileUploadComponent Component');
    this.text = 'Hello World';
  }

}
