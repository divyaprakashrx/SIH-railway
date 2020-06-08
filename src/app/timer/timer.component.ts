import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor() {}
  intervalId = 0;
  message = '';
  seconds = 300;
  info = `Stop`;
  clearTimer() {
  }
  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.stop();
  }
  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `${this.seconds}`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Timeout';
        this.info = `Login Again`;
      } else {
        if (this.seconds < 0) {
          return;
        } // reset
        this.message = `Time Left : ${this.seconds} seconds`;
      }
    }, 1000);
  }
}
