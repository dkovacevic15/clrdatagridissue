import { Component } from '@angular/core';
import { AirplaneMake } from '@models/airplane-make.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  airplaneMakes: AirplaneMake[] = [
    { manufacturer: 'Boeing', model: '747'},
    { manufacturer: 'Test', model: '123'},
    { manufacturer: 'Big ass', model: 'Plane'}
  ];

  fields: String[] = [ "manufacturer", "model"];
}
