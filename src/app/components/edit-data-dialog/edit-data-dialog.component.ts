import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';


/* [{ stk_id: 5, name: Абонамент за Етикети, price1: 15 }, 
  { stk_id: -1, name: Такса за нов договор, price1: 0 },
  { stk_id: 2, name: Цена на компютър, price1: 40 }, 
  { stk_id: 3, name: Абонамент за Трансферен сървър, price1: 20 }, 
  { stk_id: 4, name: Абонамент за Хотел, price1: 35 }, 
  { stk_id: 6, name: Абонамент за Счетоводство, price1: 80 }, 
  { stk_id: 7, name: Oператор за уеб - базираната система, price1: 40 }, 
  { stk_id: 8, name: Цена на Янак Андроид ЛАЙТ, price1: 0 }, 
  { stk_id: 9, name: Абонамент за Кухненски терминал, price1: 18 }, 
  { stk_id: 10, name: Цена на Янак Андроид ПРО, price1: 40 }, 
  { stk_id: 11, name: Цена за ПОС терминал, price1: 3 }, 
  { stk_id: 12, name: Цена е - меню Лайт, price1: 20 }, 
  { stk_id: 13, name: Цена е - меню Про, price1: 40 }, 
  { stk_id: 14, name: Цена Заявка.bg, price1: 20 }]
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

interface EditDataInfo {
  name: string;
  price: number;
  stk_id: number;
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
  editDataClientArray: EditDataInfo[] = [];

  @Input() data: any;
  @Input() clientData: any;
  @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
  @Output() buttonClickedClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if (this.data != undefined) {
      let parsedObject = JSON.parse(this.data);
    }
  }

  submittInfo() {
    this.buttonClicked.emit();
  }
  closeDialog() {
    this.buttonClickedClose.emit(true);
  }
}
