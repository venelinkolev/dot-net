import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs';
import { DialogData, EditDataDialogComponent, EditDataInfo, EditDataSettings } from '../edit-data-dialog/edit-data-dialog.component';

export interface DialogLoaderOptions {
    data: string;
    dialog_title: string;
}

@Component({
    selector: 'app-dialog-loader',
    templateUrl: './dialog-loader.component.html',
    styleUrls: ['./dialog-loader.component.css']
})
export class DialogLoaderComponent implements OnInit {
    public extra: any;
    constructor(private dialog: MatDialog) {
    }
    @Input() data: any;
    @Input() dialog_title: any;
    @Output() buttonClicked = new EventEmitter<EditDataInfo[]>();
    @Output() buttonClickedClose = new EventEmitter<boolean>();

    ngOnInit(): void {
        console.log(this.data);
        console.log(this.dialog_title);

        if (this.dialog_title == "edit-data-dialog") {
            const d = this.dialog.open<EditDataDialogComponent, DialogData>(EditDataDialogComponent, {
                data: {
                    data: this.data
                },
                panelClass: "dialogPanel"
            });

            d.componentInstance.buttonClicked.pipe(tap(info => {
                this.submittInfo(info, d);
            })).subscribe();
            d.componentInstance.buttonClickedClose.pipe(tap(bool => {
                this.closeDialog(bool, d);
            })).subscribe();
        }
    }

    submittInfo(info: EditDataInfo[], d: any) {
        this.buttonClicked.emit(info);
        d.close();
    }
    closeDialog(bool: boolean, d: any) {
        this.buttonClickedClose.emit(bool);
        d.close();
    }

}

