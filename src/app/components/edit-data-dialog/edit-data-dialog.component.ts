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
  sellStation: EditDataInfo;
  store: EditDataInfo;
  transfer: EditDataInfo;
  hotel: EditDataInfo;
  androidLite: EditDataInfo;
  androidPro: EditDataInfo;
  label: EditDataInfo;
  accountant: EditDataInfo;
  kitchenMonitor: EditDataInfo;
  posTerminal: EditDataInfo;
  noSendTransfer: EditDataInfo;
}

export interface EditDataInfo {
  caption: string | number;
  field_name: string;
  data_type: string;
}

export interface DialogData {
  data: string;
}

@Component({
  selector: 'app-edit-data-dialog',
  templateUrl: './edit-data-dialog.component.html',
  styleUrls: ['./edit-data-dialog.component.css']
})
export class EditDataDialogComponent implements OnInit {
  public settings: EditDataSettings = {
    sellStation: { caption: '', field_name: '', data_type: '' },
    store: { caption: '', field_name: '', data_type: '' },
    transfer: { caption: '', field_name: '', data_type: '' },
    hotel: { caption: '', field_name: '', data_type: '' },
    androidLite: { caption: '', field_name: '', data_type: '' },
    androidPro: { caption: '', field_name: '', data_type: '' },
    label: { caption: '', field_name: '', data_type: '' },
    accountant: { caption: '', field_name: '', data_type: '' },
    kitchenMonitor: { caption: '', field_name: '', data_type: '' },
    posTerminal: { caption: '', field_name: '', data_type: '' },
    noSendTransfer: { caption: '', field_name: '', data_type: '' },
  }

  data = JSON.stringify([
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



  editDataArray: EditDataInfo[] = [];

  @Input() items: any;
  @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
  @Output() buttonClickedClose = new EventEmitter<boolean>();

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {

    if (this.items == undefined) {
      this.items = this.data;
    }

    if (this.items != undefined) {
      let parsedOject = JSON.parse(this.items);
      console.log(parsedOject);
    }
  }

  submittInfo() {
    this.buttonClicked.emit();
  }
  closeDialog() {
    this.buttonClickedClose.emit(true);
  }
}
