import { Component, ViewChild, OnInit } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-carousel-pause',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, FormsModule],
  templateUrl: 'crousel.component.html',
  styles: [
    `
      .imgBox {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .box {
        margin-top: 10px;
      }
    `,
  ],
})
export class CrouselComponent {
  carouselData = [
    {
      title: '오피스리더0',
      categorys: '건설',
      creers: '5년',
      sales: '10억',
      span1: '해당업종 20년 경력',
      detailText1: '해당업종 20년 경력',
      detailText2: '직접 기관 방문 5천승인/ 한도 안맞아 취소',
      detailText3: '은행부결',
      subText1: '18년 5월 컨설팅 의뢰',
      subText2: '업종 변경 빛 보완',
    },
    {
      title: '오피스리더1',
      categorys: '건설',
      creers: '5년',
      sales: '10억',
      span1: '해당업종 20년 경력',
      detailText1: '해당업종 20년 경력',
      detailText2: '직접 기관 방문 5천승인/ 한도 안맞아 취소',
      detailText3: '은행부결',
      subText1: '18년 5월 컨설팅 의뢰',
      subText2: '업종 변경 빛 보완',
    },
    {
      title: '오피스리더2',
      categorys: '건설',
      creers: '5년',
      sales: '10억',
      span1: '해당업종 20년 경력',
      detailText1: '해당업종 20년 경력',
      detailText2: '직접 기관 방문 5천승인/ 한도 안맞아 취소',
      detailText3: '은행부결',
      subText1: '18년 5월 컨설팅 의뢰',
      subText2: '업종 변경 빛 보완',
    },
    {
      title: '오피스리더3',
      categorys: '건설',
      creers: '5년',
      sales: '10억',
      span1: '해당업종 20년 경력',
      detailText1: '해당업종 20년 경력',
      detailText2: '직접 기관 방문 5천승인/ 한도 안맞아 취소',
      detailText3: '은행부결',
      subText1: '18년 5월 컨설팅 의뢰',
      subText2: '업종 변경 빛 보완',
    },
    {
      title: '오피스리더4',
      categorys: '건설',
      creers: '5년',
      sales: '10억',
      span1: '해당업종 20년 경력',
      detailText1: '해당업종 20년 경력',
      detailText2: '직접 기관 방문 5천승인/ 한도 안맞아 취소',
      detailText3: '은행부결',
      subText1: '18년 5월 컨설팅 의뢰',
      subText2: '업종 변경 빛 보완',
    },
  ];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  staticCarousel!: NgbCarousel;
}
