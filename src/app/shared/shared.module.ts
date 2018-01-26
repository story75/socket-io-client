import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatSidenavModule, MatToolbarModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {ChatService} from "./chat.service";
import {FormsModule} from "@angular/forms";

const reExports = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    FormsModule
];

@NgModule({
    imports: [
        CommonModule,
        ...reExports
    ],
    exports: [
        reExports
    ],
    providers: [ChatService],
    declarations: []
})
export class SharedModule {
}
