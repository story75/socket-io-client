import {Injectable} from '@angular/core';
import * as socketIo from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ChatService {

    private socket;
    private user = 'Anon';

    constructor() {
    }

    public setUser(user: string): void {
        this.user = user;
    }

    public getUser() {
        return this.user;
    }

    public connect(): void {
        if (!this.socket) {
            this.socket = socketIo(environment.serverUri);
        }
    }

    public send(message: any): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('message', (data: any) => observer.next(data));
        });
    }

    public onEvent(event: 'connect' | 'disconnect'): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
