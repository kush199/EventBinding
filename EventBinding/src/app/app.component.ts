import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
             <employee-detail></employee-detail>`
})
export class AppComponent  { name = 'Event Binding'; }
