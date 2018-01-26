import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../shared/chat.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    message = 'I like penguins...';
    messages = [];

    constructor(private chat: ChatService) {
    }

    ngOnInit() {
        this.chat.connect();
        this.chat.send({event: 'connect', user: this.chat.getUser()});
        this.chat.onMessage()
            .subscribe((msg: any) => {
                this.messages.push(msg);
            });
    }

    sendMessage() {
        if (!this.message) return;
        this.chat.send({event: 'msg', user: this.chat.getUser(), msg: this.message});
        this.message = '';
    }
}
