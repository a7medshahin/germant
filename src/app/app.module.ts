import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    ProcessListComponent,
    ViewFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
