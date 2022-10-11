import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = `Hova Games`;
  dark = new BehaviorSubject(true);

  constructor(clockService: ClockService) {
    clockService.time.subscribe((time) => {
      const curHr = time.getHours();
      if (curHr < 6 || curHr >= 18) this.dark.next(true);
      else this.dark.next(false);
    });
  }
  ngOnInit() {}
}
