import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

/*
0:{caption: 'Закупена станция', value: 0, DataType: '1', name: 'SELL_STATION', isCheckbox: 'true', …}
1:{caption: 'Склад', value: 1, DataType: '1', name: 'ALLOW_STORE', isCheckbox: 'true', …}
2:{caption: 'Цена за Склад', value: '42.00', DataType: '2', name: 'nr_price_pc', isCheckbox: 'false', …}
3:{caption: 'Трансфер', value: 0, DataType: '1', name: 'NR_ALLOW_TRSERVER', isCheckbox: 'true', …}
4:{caption: 'Цена за Трансфер', value: '20.00', DataType: '2', name: 'nr_price_transfer', isCheckbox: 'false', …}
5:{caption: 'Хотел', value: 1, DataType: '1', name: 'NR_ALLOW_HOTEL', isCheckbox: 'true', …}
6:{caption: 'Цена за Хотел', value: '35.00', DataType: '2', name: 'nr_price_hotel', isCheckbox: 'false', …}
7:{caption: 'Янак Андроид ЛАЙТ', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RESTORANT', isCheckbox: 'true', …}
8:{caption: 'Цена за Янак Андроид ЛАЙТ', value: '18.00', DataType: '2', name: 'PRICE_ANDROID_RESTORANT', isCheckbox: 'false', …}
9:{caption: 'Янак Андроид ПРО', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RAZNOS', isCheckbox: 'true', …}
10:{caption: 'Цена за Янак Андроид ПРО', value: '40.00', DataType: '2', name: 'PRICE_ANDROID_RAZNOS', isCheckbox: 'false', …}
11:{caption: 'Етикет', value: 1, DataType: '1', name: 'NR_ALLOW_ETIKET', isCheckbox: 'true', …}
12:{caption: 'Цена за Етикет', value: '15.00', DataType: '2', name: 'nr_price_etiket', isCheckbox: 'false', …}
13:{caption: 'Счетоводство', value: 0, DataType: '1', name: 'NR_ALLOW_ACCOUNTANT', isCheckbox: 'true', …}
14:{caption: 'Цена за счетоводство', value: '80.00', DataType: '2', name: 'nr_price_account', isCheckbox: 'false', …}
15:{caption: 'Кухненски терминал', value: 0, DataType: '1', name: 'ALLOW_MONITOR', isCheckbox: 'true', …}
16:{caption: 'Цена за Кухненски терминал', value: '18.00', DataType: '2', name: 'PRICE_MONITOR', isCheckbox: 'false', …}
17:{caption: 'Пос терминал', value: 0, DataType: '1', name: 'ALLOW_POSTERMINAL', isCheckbox: 'true', …}
18:{caption: 'Цена за Пос терминал', value: '3.00', DataType: '2', name: 'PRICE_POSTERMINAL', isCheckbox: 'false', …}
19:{caption: 'Забранява изпращане на данни по трансфера', value: 0, DataType: '1', name: 'ALLOW_FORBIDDEN_SEND_TRANSFER', isCheckbox: 'true', …}
*/

/* 
0:{caption: 0, field_name: 'SELL_STATION', data_type: '1'}
1:{caption: '42', field_name: 'nr_price_pc', data_type: '2'}
2:{caption: '20.00', field_name: 'nr_price_transfer', data_type: '2'}
3:{caption: '35.00', field_name: 'nr_price_hotel', data_type: '2'}
4:{caption: '18.00', field_name: 'PRICE_ANDROID_RESTORANT', data_type: '2'}
5:{caption: '40.00', field_name: 'PRICE_ANDROID_RAZNOS', data_type: '2'}
6:{caption: '15.00', field_name: 'nr_price_etiket', data_type: '2'}
7:{caption: '80.00', field_name: 'nr_price_account', data_type: '2'}
8:{caption: '18.00', field_name: 'PRICE_MONITOR', data_type: '2'}
9:{caption: '3.00', field_name: 'PRICE_POSTERMINAL', data_type: '2'}
10:{caption: 1, field_name: 'ALLOW_STORE', data_type: '1'}
11:{caption: 0, field_name: 'NR_ALLOW_TRSERVER', data_type: '1'}
12:{caption: 1, field_name: 'NR_ALLOW_HOTEL', data_type: '1'}
13:{caption: 0, field_name: 'ALLOW_ANDROID_RESTORANT', data_type: '1'}
14:{caption: 0, field_name: 'ALLOW_ANDROID_RAZNOS', data_type: '1'}
15:{caption: 1, field_name: 'NR_ALLOW_ETIKET', data_type: '1'}
16:{caption: 0, field_name: 'NR_ALLOW_ACCOUNTANT', data_type: '1'}
17:{caption: 0, field_name: 'ALLOW_MONITOR', data_type: '1'}
18:{caption: 0, field_name: 'ALLOW_POSTERMINAL', data_type: '1'}
19:{caption: 0, field_name: 'ALLOW_FORBIDDEN_SEND_TRANSFER', data_type: '1'}
*/

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

const data = JSON.stringify([
  { caption: 'Закупена станция', value: 0, DataType: '1', name: 'SELL_STATION', isCheckbox: 'true' },
  { caption: 'Склад', value: 1, DataType: '1', name: 'ALLOW_STORE', isCheckbox: 'true' },
  { caption: 'Цена за Склад', value: '42.00', DataType: '2', name: 'nr_price_pc', isCheckbox: 'false' },
  { caption: 'Трансфер', value: 0, DataType: '1', name: 'NR_ALLOW_TRSERVER', isCheckbox: 'true' },
  { caption: 'Цена за Трансфер', value: '20.00', DataType: '2', name: 'nr_price_transfer', isCheckbox: 'false' },
  { caption: 'Хотел', value: 1, DataType: '1', name: 'NR_ALLOW_HOTEL', isCheckbox: 'true' },
  { caption: 'Цена за Хотел', value: '35.00', DataType: '2', name: 'nr_price_hotel', isCheckbox: 'false' },
  { caption: 'Янак Андроид ЛАЙТ', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RESTORANT', isCheckbox: 'true' },
  { caption: 'Цена за Янак Андроид ЛАЙТ', value: '18.00', DataType: '2', name: 'PRICE_ANDROID_RESTORANT', isCheckbox: 'false' },
  { caption: 'Янак Андроид ПРО', value: 0, DataType: '1', name: 'ALLOW_ANDROID_RAZNOS', isCheckbox: 'true' },
  { caption: 'Цена за Янак Андроид ПРО', value: '40.00', DataType: '2', name: 'PRICE_ANDROID_RAZNOS', isCheckbox: 'false' },
  { caption: 'Етикет', value: 1, DataType: '1', name: 'NR_ALLOW_ETIKET', isCheckbox: 'true' },
  { caption: 'Цена за Етикет', value: '15.00', DataType: '2', name: 'nr_price_etiket', isCheckbox: 'false' },
  { caption: 'Счетоводство', value: 0, DataType: '1', name: 'NR_ALLOW_ACCOUNTANT', isCheckbox: 'true' },
  { caption: 'Цена за счетоводство', value: '80.00', DataType: '2', name: 'nr_price_account', isCheckbox: 'false' },
  { caption: 'Кухненски терминал', value: 0, DataType: '1', name: 'ALLOW_MONITOR', isCheckbox: 'true' },
  { caption: 'Цена за Кухненски терминал', value: '18.00', DataType: '2', name: 'PRICE_MONITOR', isCheckbox: 'false' },
  { caption: 'Пос терминал', value: 0, DataType: '1', name: 'ALLOW_POSTERMINAL', isCheckbox: 'true' },
  { caption: 'Цена за Пос терминал', value: '3.00', DataType: '2', name: 'PRICE_POSTERMINAL', isCheckbox: 'false' },
  { caption: 'Забранява изпращане на данни по трансфера', value: 0, DataType: '1', name: 'ALLOW_FORBIDDEN_SEND_TRANSFER', isCheckbox: 'true' },
]);

@Component({
  selector: 'app-edit-data-dialog',
  templateUrl: './edit-data-dialog.component.html',
  styleUrls: ['./edit-data-dialog.component.css']
})
export class EditDataDialogComponent implements OnInit {
  public settings: EditDataSettings = {
    sellStation: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    store: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    transfer: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    hotel: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    androidLite: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    androidPro: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    label: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    accountant: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    kitchenMonitor: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    posTerminal: { caption: '', field_name: '', data_type: '', isCheck: 0 },
    noSendTransfer: { caption: '', field_name: '', data_type: '', isCheck: 0 },
  }

  editDataArray: EditDataInfo[] = [];

  @Input() items: any;
  @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
  @Output() buttonClickedClose = new EventEmitter<boolean>();

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {

    if (this.items == undefined) {
      this.items = data;
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
            }
            break;
          case 'ALLOW_FORBIDDEN_SEND_TRANSFER':
            this.settings.noSendTransfer = {
              ...this.settings.noSendTransfer,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
              isCheck: objectSetting.value,
            }
            break;
          case 'ALLOW_STORE':
            this.settings.store = {
              ...this.settings.store,
              isCheck: objectSetting.value,
            }
            break;
          case 'nr_price_pc':
            this.settings.store = {
              ...this.settings.store,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_TRSERVER':
            this.settings.transfer = {
              ...this.settings.transfer,
              isCheck: objectSetting.value,
            }
            break;
          case 'nr_price_transfer':
            this.settings.transfer = {
              ...this.settings.transfer,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_HOTEL':
            this.settings.hotel = {
              ...this.settings.hotel,
              isCheck: objectSetting.value,
            }
            break;
          case 'nr_price_hotel':
            this.settings.hotel = {
              ...this.settings.hotel,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_ANDROID_RESTORANT':
            this.settings.androidLite = {
              ...this.settings.androidLite,
              isCheck: objectSetting.value,
            }
            break;
          case 'PRICE_ANDROID_RESTORANT':
            this.settings.androidLite = {
              ...this.settings.androidLite,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_ANDROID_RAZNOS':
            this.settings.androidPro = {
              ...this.settings.androidPro,
              isCheck: objectSetting.value,
            }
            break;
          case 'PRICE_ANDROID_RAZNOS':
            this.settings.androidPro = {
              ...this.settings.androidPro,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_ETIKET':
            this.settings.label = {
              ...this.settings.label,
              isCheck: objectSetting.value,
            }
            break;
          case 'nr_price_etiket':
            this.settings.label = {
              ...this.settings.label,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'NR_ALLOW_ACCOUNTANT':
            this.settings.accountant = {
              ...this.settings.accountant,
              isCheck: objectSetting.value,
            }
            break;
          case 'nr_price_account':
            this.settings.accountant = {
              ...this.settings.accountant,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_MONITOR':
            this.settings.kitchenMonitor = {
              ...this.settings.kitchenMonitor,
              isCheck: objectSetting.value,
            }
            break;
          case 'PRICE_MONITOR':
            this.settings.kitchenMonitor = {
              ...this.settings.kitchenMonitor,
              caption: objectSetting.value,
              field_name: objectSetting.name,
              data_type: objectSetting.DataType,
            }
            break;
          case 'ALLOW_POSTERMINAL':
            this.settings.posTerminal = {
              ...this.settings.posTerminal,
              isCheck: objectSetting.value,
            }
            break;
          case 'PRICE_POSTERMINAL':
            this.settings.posTerminal = {
              ...this.settings.posTerminal,
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

  setCurrentSettingsValue(name: string, value: string | number): void {

  }

  submittInfo(): void {
    this.buttonClicked.emit();
  }
  closeDialog(): void {
    this.buttonClickedClose.emit(true);
  }
}
