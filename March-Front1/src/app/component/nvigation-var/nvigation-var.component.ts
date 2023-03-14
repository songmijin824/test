import { Component } from '@angular/core';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';

@Component({
  selector: 'app-nvigation-var',
  templateUrl: './nvigation-var.component.html',
  styleUrls: ['./nvigation-var.component.css'],
})
export class NvigationVarComponent {
  navArr: navBarObj[] = [
    { path: 'index', text: '회사소개' },
    { path: 'education', text: '기업교육' },
    { path: 'finance', text: '기업자금' },
    { path: 'restructure', text: '기업회생' },
    { path: 'consultant', text: '법인컨설팅' },
    { path: 'door', text: '문의하기' },
    { path: 'notice', text: '공지사항' },
  ];

  isLoginBtn = false;

  toggleLogin(input: boolean) {
    this.isLoginBtn = true;
    console.log(this.isLoginBtn);
  }

  handleIsLoginBtnChanged(isLoginBtn: boolean) {
    this.isLoginBtn = isLoginBtn;
    console.log(this.isLoginBtn);
  }
}

interface navBarObj {
  path: string;
  text: string;
}
