import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent, DialogOverviewExampleDialog} from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [AppComponent, DialogOverviewExampleDialog],
  declarations: [AppComponent, DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
