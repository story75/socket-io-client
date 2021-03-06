import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../shared/chat.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    user: string;

    constructor(private chat: ChatService, private router: Router) {
    }

    ngOnInit() {
        this.user = this.chat.getUser();
    }

    setUser() {
        if (!this.user) return;
        this.chat.setUser(this.user);
        this.router.navigate(['/chat']);
    }

}
