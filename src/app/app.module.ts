import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerComponent } from './Pages/career/career.component';
import { FamilyComponent } from './Pages/family/family.component';
import { FinancesComponent } from './Pages/finances/finances.component';
import { FunRecreationComponent } from './Pages/fun-recreation/fun-recreation.component';
import { HealthComponent } from './Pages/health/health.component';
import { HomeComponent } from './Pages/home/home.component';
import { LearningComponent } from './Pages/learning/learning.component';
import { RomanceComponent } from './Pages/romance/romance.component';
import { PersonDetailComponent } from './Pages/social/relationship-mgr/person/person-detail/person-detail.component';
import { PersonItemComponent } from './Pages/social/relationship-mgr/person/person-list/person-item/person-item.component';
import { PersonListComponent } from './Pages/social/relationship-mgr/person/person-list/person-list.component';
import { PersonComponent } from './Pages/social/relationship-mgr/person/person.component';
import { RelationshipMgrComponent } from './Pages/social/relationship-mgr/relationship-mgr.component';
import { SocialComponent } from './Pages/social/social.component';
import { SpiritualComponent } from './Pages/spiritual/spiritual.component';

const primeng = [
  AvatarModule,
  CardModule,
  InputTextModule,
  ImageModule,
  RatingModule,
  RippleModule,
  SidebarModule,
  ToastModule,
  ToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpiritualComponent,
    LearningComponent,
    HealthComponent,
    RomanceComponent,
    FamilyComponent,
    CareerComponent,
    FinancesComponent,
    FunRecreationComponent,
    SocialComponent,
    RelationshipMgrComponent,
    PersonComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    primeng,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
