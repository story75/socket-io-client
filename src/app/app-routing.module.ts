import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user/user/user.component";
import {ChatComponent} from "./chat/chat/chat.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/user'},
    {path: 'user', component: UserComponent},
    {path: 'chat', component: ChatComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
