import { Component, Input, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EditDataInfoRender } from '../edit-data-dialog/edit-data-dialog.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() settingsInfo!: EditDataInfoRender;

  @Input() setCurrentSettingValue!: (name: string, value: string | number, isCheck: string | number) => void;
  @Input() setCheckbox!: (e: MatCheckboxChange, name: string) => void;
  // @ViewChild('checkbox') checkbox!: HTMLElement;

  constructor() {
  }

  // setCheckbox(e: MatCheckboxChange) {
  //   console.log(e.checked);
  //   if (e.checked) this.isCheck = 1
  //   else this.isCheck = 0;
  // }

  // setCurrentSettingValue(value: string | number): void {
  //   console.log("KeyUp");
  //   console.log(value);
  // }
}
