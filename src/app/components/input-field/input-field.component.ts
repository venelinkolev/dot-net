import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void { }
}
