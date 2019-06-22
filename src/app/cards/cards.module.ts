import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardsLazyListComponent, McDirective } from './mat-cards-lazy-list/mat-cards-lazy-list.component';
import { MatCardsComponent } from './mat-cards/mat-cards.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    MatCardsLazyListComponent,
    MatCardsComponent,
    McDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatCardsLazyListComponent,
    MatCardsComponent,
  ],
})
export class CardsModule {
}
