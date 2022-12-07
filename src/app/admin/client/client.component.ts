import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ClientDialogComponent} from './client-dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }


  public deleteClient() {

  }

  public createClient() {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '650px',
      height: 'auto',
      disableClose: true,
    })
  }

  ngOnInit(): void {
  }
}
