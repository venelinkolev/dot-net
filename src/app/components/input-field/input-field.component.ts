import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { formatNumber } from '@angular/common';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EditDataInfoRender } from '../edit-data-dialog/edit-data-dialog.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() settingsInfo!: EditDataInfoRender;

  @Input() setCurrentSettingValue!: (name: string, value: string | number) => void;
  @Input() setCheckbox!: (e: MatCheckboxChange, name: string) => void;
  // @ViewChild('checkbox') checkbox!: HTMLElement;

  // numberValue!: string
  constructor() {
  }

  ngOnInit(): void {
    // this.numberValue = formatNumber(Number(this.settingsInfo.caption), 'bg-BG', '2.1-2');

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
