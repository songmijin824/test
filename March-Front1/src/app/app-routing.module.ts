import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { EducationComponent } from './page/education/education.component';
import { FinanceComponent } from './page/finance/finance.component';
import { ConsultantComponent } from './page/consultant/consultant.component';
import { DoorComponent } from './page/door/door.component';
import { NoticeComponent } from './page/notice/notice.component';
import { RestructureComponent } from './page/restructure/restructure.component';
import { JoinusComponent } from './page/joinus/joinus.component';
import { TOSComponent } from './page/tos/tos.component';
import { PrivacypolicyComponent } from './page/privacypolicy/privacypolicy.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, pathMatch: 'full' },
  { path: 'education', component: EducationComponent, pathMatch: 'full' },
  { path: 'finance', component: FinanceComponent, pathMatch: 'full' },
  { path: 'restructure', component: RestructureComponent, pathMatch: 'full' },
  { path: 'consultant', component: ConsultantComponent, pathMatch: 'full' },
  { path: 'door', component: DoorComponent, pathMatch: 'full' },
  { path: 'notice', component: NoticeComponent, pathMatch: 'full' },
  { path: 'joinus', component: JoinusComponent, pathMatch: 'full' },
  { path: 'tos', component: TOSComponent, pathMatch: 'full' },

  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
