import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
})
export class ModalLoginComponent {
  @Output() isLoginBtnChanged = new EventEmitter<boolean>();
  isLoginBtn: boolean = false;

  loginFn() {
    //비동기 api호출문
    // const ayncValue = {
    //   code: 200,
    //   id: 'iddata',
    //   token: 'tokendata',
    // };
    // const ayncValueError = {
    //   code: 400,
    // };
    // if (ayncValue.code === 200) {
    //   //상태관리 후
    //   //양방향 바인딩으로 창 닫기
    // }

    // if (ayncValueError.code === 400) {
    //   return alert('아이디 또는 비밀번호가 틀렸습니다.');
    // }
    // if (ayncValueError.code === 403 || ayncValueError.code === 500) {
    //   return alert('서버에 문제가 생겼습니다. 관리자에게 문의해 주세요');
    // }

    // 로그인되면 상태 변경 후 닫기
    return this.isLoginBtnChanged.emit(this.isLoginBtn);
  }
}
