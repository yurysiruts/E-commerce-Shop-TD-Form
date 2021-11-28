import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FormService {
  activeRadioButtons = new BehaviorSubject<any>([]);

  addNewRadio(radioBtn) {
    this.activeRadioButtons.next(radioBtn);
  };
}