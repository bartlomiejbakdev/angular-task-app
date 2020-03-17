import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskDoneDirective } from './shared/task-done.directive';
import { DateDirective } from './shared/date.directive';
import { SignInPanelComponent } from './sign-in-panel/sign-in-panel.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ApplicationComponent } from './application/application.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginPanelComponent,
    FooterComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    TaskDoneDirective,
    DateDirective,
    SignInPanelComponent,
    MainpageComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
