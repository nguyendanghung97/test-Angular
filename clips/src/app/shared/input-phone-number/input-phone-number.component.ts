import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-phone-number',
  templateUrl: './input-phone-number.component.html',
  styleUrls: ['./input-phone-number.component.css']
})
export class InputPhoneNumberComponent {
  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() format = ''
}
