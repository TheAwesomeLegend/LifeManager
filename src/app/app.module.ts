import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SpiritualComponent } from './Pages/spiritual/spiritual.component';
import { LearningComponent } from './Pages/learning/learning.component';
import { HealthComponent } from './Pages/health/health.component';
import { RomanceComponent } from './Pages/romance/romance.component';
import { FamilyComponent } from './Pages/family/family.component';
import { CareerComponent } from './Pages/career/career.component';
import { FinancesComponent } from './Pages/finances/finances.component';
import { FunRecreationComponent } from './Pages/fun-recreation/fun-recreation.component';
import { SocialComponent } from './Pages/social/social.component';

const primeng = [
  InputTextModule,
  RippleModule,
  SidebarModule,
  ToastModule,
  ToolbarModule,
];

@NgModule({
  declarations: [AppComponent, HomeComponent, SpiritualComponent, LearningComponent, HealthComponent, RomanceComponent, FamilyComponent, CareerComponent, FinancesComponent, FunRecreationComponent, SocialComponent],
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
