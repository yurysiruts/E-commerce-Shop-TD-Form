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

  constructor(
    private apiService: AppService,
  ) { }

  ngOnInit() {
    this.apiService.getImage().subscribe((response: any) => {
      console.log(response);
      this.items = response;
    });
  }

  // ngOnDestroy(): void {
  //   this.imageSub.unsubscribe();
  // }

}
