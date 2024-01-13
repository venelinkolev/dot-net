import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface EditDataSettings {
  sellStation: EditDataInfoRender;
  store: EditDataInfoRender;
  transfer: EditDataInfoRender;
  hotel: EditDataInfoRender;
  androidLite: EditDataInfoRender;
  androidPro: EditDataInfoRender;
  label: EditDataInfoRender;
  accountant: EditDataInfoRender;
  kitchenMonitor: EditDataInfoRender;
  posTerminal: EditDataInfoRender;
  noSendTransfer: EditDataInfoRender;
}

export interface EditDataInfo {
  caption: string | number;
  field_name: string;
  data_type: string;
}

export interface EditDataInfoRender {
  caption: string | number;
  field_name: string;
  data_type: string;
  isCheck: number | string;
  name: string;
  nameCheckbox: string;
}

export interface DialogData {
  data: string;
}

export interface DataType {
  caption: string;
  value: string | number;
  DataType: string;
  name: string;
  isCheckbox: string;
}

// const data = JSON.stringify([
//   { caption: 'Закупена станция', value: 0, DataType: '1', name: 'SELL_STATION', isCheckbox: 'true' },
//   { caption: 'Склад', value: 1, DataType: '1', name: 'ALLOW_STORE', isCheckbox: 'true' },
//   { caption: 'Цена за Склад', value: '42.00', DataType: '2', name: 'nr_price_pc', isCheckbox: 'false' },
//   { caption: 'Трансфер', value: 0, DataType: '1', name: 'NR_ALLOW_TRSERVER', isCheckbox: 'true' },
//   { caption: 'Цена за Трансфер', value: '20.00', DataType: '2', name: 'nr_price_transfer', isCheckbox: 'false' },
//   { caption: 'Хотел', value: 1, DataType: '1', name: 'NR_ALLOW_HOTEL', isCheckbox: 'true' },
//   { caption: 'Цена за Хотел', value: '35.00', DataType: '2', name: 'nr_price_hotel', isCheckbox: 'false' },
//   { caption: 'Янак Андроид ЛАЙТ', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RESTORANT', isCheckbox: 'true' },
//   { caption: 'Цена за Янак Андроид ЛАЙТ', value: '18.00', DataType: '2', name: 'PRICE_ANDROID_RESTORANT', isCheckbox: 'false' },
//   { caption: 'Янак Андроид ПРО', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RAZNOS', isCheckbox: 'true' },
//   { caption: 'Цена за Янак Андроид ПРО', value: '40.00', DataType: '2', name: 'PRICE_ANDROID_RAZNOS', isCheckbox: 'false' },
//   { caption: 'Етикет', value: 1, DataType: '1', name: 'NR_ALLOW_ETIKET', isCheckbox: 'true' },
//   { caption: 'Цена за Етикет', value: '15.00', DataType: '2', name: 'nr_price_etiket', isCheckbox: 'false' },
//   { caption: 'Счетоводство', value: 0, DataType: '1', name: 'NR_ALLOW_ACCOUNTANT', isCheckbox: 'true' },
//   { caption: 'Цена за счетоводство', value: '80.00', DataType: '2', name: 'nr_price_account', isCheckbox: 'false' },
//   { caption: 'Кухненски терминал', value: 0, DataType: '1', name: 'ALLOW_MONITOR', isCheckbox: 'true' },
//   { caption: 'Цена за Кухненски терминал', value: '18.00', DataType: '2', name: 'PRICE_MONITOR', isCheckbox: 'false' },
//   { caption: 'Пос терминал', value: 0, DataType: '1', name: 'ALLOW_POSTERMINAL', isCheckbox: 'true' },
//   { caption: 'Цена за Пос терминал', value: '3.00', DataType: '2', name: 'PRICE_POSTERMINAL', isCheckbox: 'false' },
//   { caption: 'Забранява изпращане на данни по трансфера', value: 0, DataType: '1', name: 'ALLOW_FORBIDDEN_SEND_TRANSFER', isCheckbox: 'true' },
// ]);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,

    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };

  return newDescriptor;
}

@Component({
  selector: 'app-edit-data-dialog',
  templateUrl: './edit-data-dialog.component.html',
  styleUrls: ['./edit-data-dialog.component.css']
})
export class EditDataDialogComponent implements OnInit {
  public settings: EditDataSettings = {
    sellStation: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    store: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    transfer: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    hotel: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    androidLite: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    androidPro: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    label: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    accountant: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    kitchenMonitor: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    posTerminal: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
    noSendTransfer: { caption: '', field_name: '', data_type: '', isCheck: 0, name: '', nameCheckbox: '' },
  }

  editDataArray: EditDataInfo[] = [];

  @Input() items: any;
  @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
  @Output() buttonClickedClose = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {

    if (this.items == undefined) {
      this.items = this.data.data;
    }

    if (this.items != undefined) {
      let parsedObject: DataType[] = JSON.parse(this.items);
      // console.log(parsedObject);


      for (let i = 0; i < parsedObject.length; i++) {
        let objectSetting: DataType = parsedObject[i];
        // console.log(objectSetting);

        this.editDataArray.push({ caption: objectSetting.value, field_name: objectSetting.name, data_type: objectSetting.DataType });

        let nameSetting = objectSetting.name;

        switch (nameSetting) {
          case 'SELL_STATION':
            this.settings.sellStation = {
              ...this.settings.sellStation,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
              isCheck: objectSetting.value,
              name: objectSetting.caption,
            }
            break;
          case 'ALLOW_FORBIDDEN_SEND_TRANSFER':
            this.settings.noSendTransfer = {
              ...this.settings.noSendTransfer,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
              isCheck: objectSetting.value,
              name: objectSetting.caption,
            }
            break;
          case 'ALLOW_STORE':
            this.settings.store = {
              ...this.settings.store,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'nr_price_pc':
            this.settings.store = {
              ...this.settings.store,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_TRSERVER':
            this.settings.transfer = {
              ...this.settings.transfer,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'nr_price_transfer':
            this.settings.transfer = {
              ...this.settings.transfer,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_HOTEL':
            this.settings.hotel = {
              ...this.settings.hotel,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'nr_price_hotel':
            this.settings.hotel = {
              ...this.settings.hotel,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_ANDROID_RESTORANT':
            this.settings.androidLite = {
              ...this.settings.androidLite,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'PRICE_ANDROID_RESTORANT':
            this.settings.androidLite = {
              ...this.settings.androidLite,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_ANDROID_RAZNOS':
            this.settings.androidPro = {
              ...this.settings.androidPro,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'PRICE_ANDROID_RAZNOS':
            this.settings.androidPro = {
              ...this.settings.androidPro,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_ETIKET':
            this.settings.label = {
              ...this.settings.label,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'nr_price_etiket':
            this.settings.label = {
              ...this.settings.label,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_ACCOUNTANT':
            this.settings.accountant = {
              ...this.settings.accountant,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'nr_price_account':
            this.settings.accountant = {
              ...this.settings.accountant,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_MONITOR':
            this.settings.kitchenMonitor = {
              ...this.settings.kitchenMonitor,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'PRICE_MONITOR':
            this.settings.kitchenMonitor = {
              ...this.settings.kitchenMonitor,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_POSTERMINAL':
            this.settings.posTerminal = {
              ...this.settings.posTerminal,
              isCheck: objectSetting.value,
              nameCheckbox: objectSetting.name,
            }
            break;
          case 'PRICE_POSTERMINAL':
            this.settings.posTerminal = {
              ...this.settings.posTerminal,
              name: objectSetting.caption,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
        }
      }
    }

    console.log(this.settings);
    console.log(this.editDataArray);
  }

  @Autobind
  setCurrentSettingValue(name: string, value: string | number): void {
    console.log('Set Value');
    console.log('Name:', name);
    console.log('Value:', value);

    const index = this.editDataArray.findIndex(x => x.field_name == name);
    console.log('Index: ', index);

    this.editDataArray[index] = {
      ...this.editDataArray[index],
      caption: Number(value).toFixed(2).toString(),
    }
  }

  @Autobind
  setCheckbox(e: MatCheckboxChange, name: string) {
    console.log(e.checked);
    console.log(name);

    let value = 0;
    if (e.checked) value = 1;

    const index = this.editDataArray.findIndex(x => x.field_name == name);
    console.log('Index: ', index);

    this.editDataArray[index] = { ...this.editDataArray[index], caption: value };

    console.log(this.editDataArray);
  }

  submittInfo(): void {
    this.buttonClicked.emit();
    console.log(this.editDataArray);
  }
  closeDialog(): void {
    this.buttonClickedClose.emit(true);
  }
}
