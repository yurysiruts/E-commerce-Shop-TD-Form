import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public items = null;
  public visible = false;
  public actual = null;
  public i: number;

  constructor(
    private apiService: AppService,
  ) { }

  ngOnInit() {
    this.apiService.getImage().subscribe((response: any) => {
      console.log(response);
      this.items = response;
      this.i = 0;
      this.actual = this.items[this.i].urls.full;
    });
  }
  
  onPrev() {
    this.i-=1;
    this.actual = this.items[this.i].urls.full;
    console.log(this.i);
  }

  onNext() {
    this.i+=1;
    this.actual = this.items[this.i].urls.full;
    console.log(this.i);
  }

  // ngOnDestroy(): void {
  //   this.imageSub.unsubscribe();
  // }

}
