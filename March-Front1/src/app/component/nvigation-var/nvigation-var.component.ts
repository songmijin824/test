import { Component, ViewChild } from '@angular/core';
import { ModalLoginComponent } from 'src/app/component/modal-login/modal-login.component';

@Component({
  selector: 'app-nvigation-var',
  templateUrl: './nvigation-var.component.html',
  styleUrls: ['./nvigation-var.component.css'],
})
export class NvigationVarComponent {
  generatedModal: any;

  @ViewChild(ModalLoginComponent, { static: false })
  modalLoginComponent: ModalLoginComponent | undefined;

  navArr: navBarObj[] = [
    { path: 'index', text: '회사소개' },
    { path: 'education', text: '기업교육' },
    { path: 'finance', text: '기업자금' },
    { path: 'restructure', text: '기업회생' },
    { path: 'consultant', text: '법인컨설팅' },
    { path: 'door', text: '문의하기' },
    { path: 'notice', text: '공지사항' },
  ];

  isLoginBtn = true;

  toggleLogin() {
    this.isLoginBtn = !this.isLoginBtn;

    return console.log(this.isLoginBtn);
  }

  handleIsLoginBtnChanged(isLoginBtn: boolean) {
    this.isLoginBtn = isLoginBtn;
    return console.log(this.isLoginBtn);
  }
}

interface navBarObj {
  path: string;
  text: string;
}
