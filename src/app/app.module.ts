import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule} from '@angular/fire/compat';
import { RsvpComponent } from './contatos/rsvp/rsvp.component';
import { ListComponent } from './contatos/list/list.component';
import { EditComponent } from './contatos/edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
