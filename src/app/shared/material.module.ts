import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule,
    MatInputModule, MatSelectModule, MatRadioModule, MatSlideToggleModule,
    MatToolbarModule
} from '@angular/material';

let modules = [MatToolbarModule, MatProgressSpinnerModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSlideToggleModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }