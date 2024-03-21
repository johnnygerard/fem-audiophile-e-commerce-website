import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, viewChild } from '@angular/core';
import { SvgCheckmarkComponent } from '../../../svg/svg-checkmark/svg-checkmark.component';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { AppCurrencyPipe } from '../../../app-currency.pipe';
import { OrderService } from '../../../services/order.service';
import { PriceService } from '../../../services/price.service';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    AppCurrencyPipe,
    SvgCheckmarkComponent,
  ],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderConfirmationComponent implements OnInit {
  readonly items = this._order.items;
  readonly itemQuantities = this._order.itemQuantities;
  readonly total = this._price.getPriceBreakdown(this.items).total;
  isListExpanded = false;
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor(
    private readonly _router: Router,
    private readonly _order: OrderService,
    private readonly _price: PriceService,
  ) { }

  ngOnInit(): void {
    this.dialog().nativeElement.showModal();
  }

  toggleList(): void {
    this.isListExpanded = !this.isListExpanded;
  }

  @HostListener('body:keydown.Escape')
  onEscape(): void {
    this._router.navigateByUrl('/');
  }
}
