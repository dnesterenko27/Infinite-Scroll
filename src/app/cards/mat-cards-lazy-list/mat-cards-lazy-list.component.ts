import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';


@Directive({
  selector: '[appMc]',
})
export class McDirective {
}

@Component({
  selector: 'app-mat-cards-lazy-list',
  templateUrl: './mat-cards-lazy-list.component.html',
  styleUrls: ['./mat-cards-lazy-list.component.scss'],
})
export class MatCardsLazyListComponent implements AfterViewInit {
  cardHeight = 630;
  currentIndex = 0;
  screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  @ContentChildren(McDirective, {read: TemplateRef}) matCards: QueryList<any>;
  @ViewChild('vc', {read: ViewContainerRef, static: false}) vc: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef) {
  }

  @HostListener('window:scroll')
  initOnScroll() {
    this.toggleVisibility();
  }

  toggleVisibility() {
    const scrollTop = Math.ceil(window.pageYOffset);
    const index = Math.ceil((this.screenHeight + scrollTop) / this.cardHeight);

    if (
      index >= this.matCards.length ||
      index <= this.currentIndex) {
      return;
    }
    this.currentIndex = index;
    this.vc
      .createEmbeddedView(this.matCards
        .toArray()[index]);
  }


  ngAfterViewInit() {
    const initialItems = Math.ceil(this.screenHeight / this.cardHeight);

    this.matCards
      .toArray()
      .slice(0, initialItems)
      .forEach(card => {
        this.vc.createEmbeddedView(card);
        this.cdr.detectChanges();
      });
  }
}
