import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { EducationComponent } from './page/education/education.component';
import { FinanceComponent } from './page/finance/finance.component';
import { RestructureComponent } from './page/restructure/restructure.component';
import { ConsultantComponent } from './page/consultant/consultant.component';
import { DoorComponent } from './page/door/door.component';
import { NoticeComponent } from './page/notice/notice.component';
import { LoginpComponent } from './page/loginp/loginp.component';
import { NvigationVarComponent } from './component/nvigation-var/nvigation-var.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrouselComponent } from './component/crousel/crousel.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { JoinusComponent } from './page/joinus/joinus.component';
import { TOSComponent } from './page/tos/tos.component';
import { PrivacypolicyComponent } from './page/privacypolicy/privacypolicy.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EducationComponent,
    FinanceComponent,
    RestructureComponent,
    ConsultantComponent,
    DoorComponent,
    NoticeComponent,
    LoginpComponent,
    NvigationVarComponent,
    FooterComponent,
    ModalLoginComponent,
    JoinusComponent,
    TOSComponent,
    PrivacypolicyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    CrouselComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
