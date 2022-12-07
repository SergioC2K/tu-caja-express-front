import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProgramDialogComponent} from './program-dialog';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  public createProgram(): void {
    const dialogRef = this.dialog.open(ProgramDialogComponent, {
      width: '500px',
      height: 'auto',
      disableClose: true,
    })
  }


  ngOnInit(): void {
  }

}
