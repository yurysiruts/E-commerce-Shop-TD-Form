import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { OnStart } from '../shared/on-start';
import { DogService } from './service/dog.service';

@Component({
  selector: 'app-dog-app',
  templateUrl: './dog-app.component.html',
  styleUrls: ['./dog-app.component.scss'],
})
export class DogAppComponent implements OnInit {
  startPoll;
  stopPoll$;
  pollingStatus: boolean = false;
  dogImg: string =
    'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2639.jpg';

  @ViewChild('stopPoll', { static: true }) stopPollProperty;

  constructor(private startPage: OnStart, private dogService: DogService) {}

  ngOnInit(): void {
    // this.stopPoll$ = fromEvent(this.stopPollProperty, 'click').subscribe(val => console.log(val));
  }

  onPoll() {
    this.pollingStatus = true;
    this.dogService.getDog().subscribe((response) => {
      this.dogImg = response.message;
      this.pollingStatus = false;
    });
  }

  onEndPoll() {}

  // Go on start page
  onStart() {
    this.startPage.onStart();
  }
}
