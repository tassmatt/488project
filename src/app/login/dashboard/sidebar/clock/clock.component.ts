import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  clockString = "00:00:00 AM";

  run(){
    var time = new Date();
    var ampm = "AM";

    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    // Makes the clock go by 12 hour intervals
    if(time.getHours() > 12){
      hours = (time.getHours() - 12).toString();
      ampm = "PM";
    }


    // ------ Sets the 0 placeholders when the hour/minute/seconds are single digits ------
    // if (hours.length < 2) {
    //     hours = '0' + hours;
    //   }
  
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
  
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    // -------------


    this.clockString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  }
  
  constructor() {}

  ngOnInit() {
    setInterval(() => this.run(), 1000)  // Constantly refreshes the clock
  }

}
