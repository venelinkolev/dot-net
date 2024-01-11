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
  labelSubscription: EditDataInfo;
  taxNewContract: EditDataInfo;
  priceStation: EditDataInfo;
  transferServerSubscription: EditDataInfo;
  hotelSubscription: EditDataInfo;
  accountingSubscription: EditDataInfo;
  webSystemOperator: EditDataInfo;
  androidLite: EditDataInfo;
  kitchenTerminalSubscription: EditDataInfo;
  androidPro: EditDataInfo;
  posTerminal: EditDataInfo;
  eMenuLite: EditDataInfo;
  eMenuPro: EditDataInfo;
  zayavkaSubscription: EditDataInfo;
}

export interface EditDataInfo {
  name: string;
  price: number;
  stk_id: number;
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
    labelSubscription: { name: '', price: 15, stk_id: 5 },
    taxNewContract: { name: '', price: 0, stk_id: -1 },
    priceStation: { name: '', price: 40, stk_id: 2 },
    transferServerSubscription: { name: '', price: 20, stk_id: 3 },
    hotelSubscription: { name: '', price: 35, stk_id: 4 },
    accountingSubscription: { name: '', price: 80, stk_id: 6 },
    webSystemOperator: { name: '', price: 40, stk_id: 7 },
    androidLite: { name: '', price: 0, stk_id: 8 },
    kitchenTerminalSubscription: { name: '', price: 15, stk_id: 9 },
    androidPro: { name: '', price: 40, stk_id: 10 },
    posTerminal: { name: '', price: 3, stk_id: 11 },
    eMenuLite: { name: '', price: 20, stk_id: 12 },
    eMenuPro: { name: '', price: 40, stk_id: 13 },
    zayavkaSubscription: { name: '', price: 20, stk_id: 14 }
  }

  editDataArray: EditDataInfo[] = [];
  parsedOject: EditDataInfo[] = [];

  @Input() items: any;
  @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
  @Output() buttonClickedClose = new EventEmitter<boolean>();

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    if (this.items != undefined) {
      this.parsedOject = JSON.parse(this.items);

    }
  }

  submittInfo() {
    this.buttonClicked.emit();
  }
  closeDialog() {
    this.buttonClickedClose.emit(true);
  }
}
