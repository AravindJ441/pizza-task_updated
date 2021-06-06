import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { CreateEditProductDialogComponent } from './dialogs/create-edit-product/create-edit-product.component';
import { DialogModule } from './dialogs/dialog.module';
import { HomeManagementService } from './services/home-management.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    HomeManagementService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateEditProductDialogComponent
  ]
})
export class AppModule { }
