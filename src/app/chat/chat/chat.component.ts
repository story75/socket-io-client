import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    message = 'I like penguins...';

    constructor() {
    }

    ngOnInit() {
    }

    sendMessage() {
        if (!this.message) return;

        console.log(this.message);
        this.message = '';
    }
}
