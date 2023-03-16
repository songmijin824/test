import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  @ViewChild('carousel', { static: true })
  @ViewChildren('tabBox')
  LiList!: QueryList<ElementRef>;
  @ViewChildren('divsBox')
  divBox!: QueryList<ElementRef>;
  carousel!: NgbCarousel;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // 초기 설정
    // QueryList 객체의 변경을 감지하여 처리
    this.LiList.changes.subscribe((items) => {
      items.forEach((item: any) => {
        if (!item.nativeElement.className.includes('select')) {
          this.renderer.removeClass(item.nativeElement, 'select');
        }
      });
    });
    this.divBox.changes.subscribe((items) => {
      items.forEach((item: any) => {
        if (!item.nativeElement.className.includes('select')) {
          this.renderer.removeClass(item.nativeElement, 'select');
        }
      });
    });
  }
  selectTab($event: Event) {
    const regex = /[^0-9]/g;
    let target = ($event.target as HTMLElement).className;

    let numberof = target.replace(regex, '');

    this.LiList?.forEach((item) => {
      const element: string = item.nativeElement.className;
      if (!(element === target)) {
        const temp = element;
        if (item.nativeElement.classList.value.includes('select')) {
          item.nativeElement.classList.value = temp.replaceAll('select', '');
        }
      }
      if (element === target) {
        const temp = element;
        if (item.nativeElement.classList.value.includes('select')) {
          item.nativeElement.classList.value = temp.replaceAll('select', '');
        }
        item.nativeElement.className = element + ' select';
      }
      $event.stopPropagation();
    });
    console.log(numberof);
    this.divBox?.forEach((item) => {
      const element2: string = item.nativeElement.className;

      if (
        !item.nativeElement.className.includes(numberof) &&
        item.nativeElement.className.includes('select')
      ) {
        const temp = element2;
        item.nativeElement.classList.value = temp.replace('select', '');
      }
      if (
        item.nativeElement.className.includes(numberof) &&
        !item.nativeElement.className.includes('select')
      ) {
        item.nativeElement.className = element2 + ' select';
      }
      $event.stopPropagation();
    });
  }
  carouselData = [
    {
      first: {
        title: '오피스리더0',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
      second: {
        title: '오피스리더1',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
    },
    {
      first: {
        title: '오피스리더25825 2',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
      second: {
        title: '오피스리더3',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
    },
  ];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  cname = '';
  mname = '';
  phone = '';
  email = '';

  inputCname($event: any) {
    this.cname = $event.target.value;
  }
  Mname($event: any) {
    this.mname = $event.target.value;
  }
  inputPhone($event: any) {
    this.phone = $event.target.value;
  }
  inputEmail($event: any) {
    this.email = $event.target.value;
  }
  tags: string[] = [];
  ischeckBtn($event: any) {
    let tag = $event.target.id;

    if ($event.currentTarget.checked) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      } else return;
    }
    if (!$event.currentTarget.checked) {
      if (this.tags.includes(tag)) {
        const location = this.tags.indexOf(tag);
        this.tags.splice(location, 1);
      } else return;
    }
    console.log(this.tags);
  }
}

//이게 다른 문제면 괜찮은대 케러셀 자체는 array[i]를 출력할때 0번쨰를 activate 시키지 않고 출력해서
//오브젝트 2개를 한번에 묶는게 낫다.
