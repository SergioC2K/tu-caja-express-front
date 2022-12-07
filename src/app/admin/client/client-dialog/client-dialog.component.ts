import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent {

  constructor(private dialogRef: MatDialogRef<ClientDialogComponent>) {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
