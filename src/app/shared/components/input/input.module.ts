import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {MaterialModule} from '../../../material.module';


@NgModule({
    declarations: [InputComponent],
    exports: [
        InputComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class InputModule {
}
