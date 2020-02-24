import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ToolbarInAppComponent } from './toolbar-in-app/toolbar-in-app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskDoneDirective } from './shared/task-done.directive';
import { DateDirective } from './shared/date.directive';
import { SignInPanelComponent } from './sign-in-panel/sign-in-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginPanelComponent,
    FooterComponent,
    ToolbarInAppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    TaskDoneDirective,
    DateDirective,
    SignInPanelComponent
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
