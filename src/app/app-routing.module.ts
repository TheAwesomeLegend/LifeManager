import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './Social/RelationshipManager/contacts/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'social/rm/contacts', pathMatch: 'full' },
  { path: 'social/rm/contacts', component: ContactListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
