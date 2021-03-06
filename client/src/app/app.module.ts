import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';
import { SignUpDialogComponent } from './shared/sign-up-dialog/sign-up-dialog.component';
import { NotifyDialogComponent } from './shared/notify-dialog/notify-dialog.component';
import { MatPaginatorIntl } from '@angular/material';
import { getVietnamesePaginatorIntl } from './core/vietnamese-paginator.intl';
import { ToastComponent } from './shared/toast/toast.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShellModule,
    AppRoutingModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    SignUpDialogComponent,
    NotifyDialogComponent,
    ConfirmDialogComponent,
    ToastComponent
  ],
  providers: [
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: getVietnamesePaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
