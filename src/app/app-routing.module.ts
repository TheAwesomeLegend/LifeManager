import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './Pages/career/career.component';
import { FamilyComponent } from './Pages/family/family.component';
import { FinancesComponent } from './Pages/finances/finances.component';
import { FunRecreationComponent } from './Pages/fun-recreation/fun-recreation.component';
import { HealthComponent } from './Pages/health/health.component';
import { HomeComponent } from './Pages/home/home.component';
import { LearningComponent } from './Pages/learning/learning.component';
import { RomanceComponent } from './Pages/romance/romance.component';
import { SocialComponent } from './Pages/social/social.component';
import { SpiritualComponent } from './Pages/spiritual/spiritual.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'career', component: CareerComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'finances', component: FinancesComponent},
  {path: 'fun-recreation', component: FunRecreationComponent},
  {path: 'health', component: HealthComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'romance', component: RomanceComponent},
  {path: 'social', component: SocialComponent},
  {path: 'spiritual', component: SpiritualComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
