import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CheckoutFormComponent,
    CheckoutSummaryComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {
  constructor(private _location: Location) { }

  goBack(): void {
    const dialog = window.document.querySelector('#shoppingCartDialog') as HTMLDialogElement;

    dialog.showModal();
    this._location.back();
  }
}
