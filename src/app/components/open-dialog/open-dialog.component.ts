import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDataDialogComponent } from '../edit-data-dialog/edit-data-dialog.component';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EditDataDialogComponent, {
      // data: [
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
      // ],
      width: '50vw',
      // height: '80vh',
    });
  }
}
