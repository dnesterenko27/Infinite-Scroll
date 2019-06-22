import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mat-cards',
  templateUrl: './mat-cards.component.html',
  styleUrls: ['./mat-cards.component.scss'],
})
export class MatCardsComponent {
  scrollTopButtonEnabled = true;
  startedScrolling = false;

  @HostListener('window:scroll')
  toggleButton() {
    const scrollTop = Math.ceil(window.pageYOffset);

    this.startedScrolling = (scrollTop > 100);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
