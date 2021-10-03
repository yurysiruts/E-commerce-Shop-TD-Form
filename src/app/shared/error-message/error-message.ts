import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.html',
  styleUrls: ['./error-message.scss']
})
export class ErrorMessageComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  @Input() submitted: boolean;
}