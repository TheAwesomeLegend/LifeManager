import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailComponent } from './Social/RelationshipManager/contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './Social/RelationshipManager/contacts/contact-list/contact-item/contact-item.component';
import { ContactListComponent } from './Social/RelationshipManager/contacts/contact-list/contact-list.component';
import { ContactsComponent } from './Social/RelationshipManager/contacts/contacts.component';

const primeng = [
  InputTextModule,
  RippleModule,
  SidebarModule,
  ToastModule,
  ToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    primeng,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
