import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ConfirmDeleteDialogComponent } from './user-table/confirm-delete-dialog/confirm-delete-dialog.component';
import { MobileListComponent } from './user-table/mobile-list/mobile-list.component';
import { DesktopListComponent } from './user-table/desktop-list/desktop-list.component';
import {FormDialogComponent} from './user-table/form-dialog/form-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserTableComponent,
    UserDetailsComponent,
    FormDialogComponent,
    ConfirmDeleteDialogComponent,
    MobileListComponent,
    DesktopListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        LayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  entryComponents: [FormDialogComponent, ConfirmDeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
