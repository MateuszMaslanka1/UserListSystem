import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserTableComponent,
    MainComponent,
    UserDetailsComponent,
    FormDialogComponent,
    ConfirmDeleteDialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        LayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatListModule,
        MatPaginatorModule
    ],
  entryComponents: [FormDialogComponent, ConfirmDeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
