import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  radio: string;
  options: Array<{name: string, value: string}>;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.activeRadioButtons.subscribe((val) => {
      console.log(val);
      this.options = val;
    });
  }

  onChose(event) {
    this.radio = event.target.defaultValue;
  };

}
