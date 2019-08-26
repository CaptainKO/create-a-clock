import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public clock: Observable<number>;
  constructor() {
    this.clock = interval(1000).pipe(map(_ => Date.now()));
  }
}
