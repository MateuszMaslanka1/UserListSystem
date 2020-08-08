import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';



import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserTableComponent,
    MainComponent,
    AddUserDialogComponent,
    UserDetailsComponent,
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
        MatListModule
    ],
  entryComponents: [AddUserDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
