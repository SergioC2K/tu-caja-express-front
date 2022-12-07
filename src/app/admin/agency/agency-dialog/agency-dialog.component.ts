import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-agency-dialog',
  templateUrl: './agency-dialog.component.html',
  styleUrls: ['./agency-dialog.component.css']
})
export class AgencyDialogComponent implements OnInit {
  public form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AgencyDialogComponent>, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
