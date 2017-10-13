import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { routing } from './app.routing';
import { HomeComponent } from './Components/home.component';
import { UserComponent } from './components/user.component';

import { UserService } from './Service/user.service'
import { UserFilterPipe } from './filter/user.pipe';
import { SearchComponent } from './Shared/search.component';

import AppErrorHandler from './Shared/errorhandler';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { ManageUser } from './components/manageuser.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule, BrowserAnimationsModule, MaterialModule, MdNativeDateModule],
    declarations: [AppComponent, UserComponent, HomeComponent, UserFilterPipe, SearchComponent, ManageUser],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, { provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent],
    entryComponents: [ManageUser]
})

export class AppModule { }