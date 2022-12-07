import {Injectable, Input, OnDestroy} from '@angular/core';
import {SubSink} from 'subsink';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable()
export class UnsubscribeOnDestroyDirective implements OnDestroy {

  @Input()
  public loading: boolean = false;

  public subs = new SubSink();

  constructor(public formBuilder: FormBuilder, public form: FormGroup) {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
