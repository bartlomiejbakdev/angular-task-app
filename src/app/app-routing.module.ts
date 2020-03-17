import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPanelComponent} from './login-panel/login-panel.component';
import {SignInPanelComponent} from './sign-in-panel/sign-in-panel.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {ApplicationComponent} from './application/application.component';


const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'register', component: SignInPanelComponent},
    {path: 'login', component: LoginPanelComponent},
    {path: 'app', component: ApplicationComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
