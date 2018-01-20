import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule,
    MatInputModule, MatSelectModule, MatRadioModule, MatSlideToggleModule
} from '@angular/material';

let modules = [MatProgressSpinnerModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSlideToggleModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }