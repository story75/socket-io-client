import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule, MatDialog, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatSidenavModule, MatToolbarModule
} from "@angular/material";

const reExports = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
];

@NgModule({
    imports: [
        CommonModule,
        ...reExports
    ],
    exports: [
        reExports
    ],
    providers: [MatDialog],
    declarations: []
})
export class SharedModule {
}
