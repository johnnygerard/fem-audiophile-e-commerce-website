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
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CheckoutPageComponent {
  constructor(private _location: Location) { }

  goBack(): void {
    const dialog = window.document.querySelector('#shoppingCartDialog') as HTMLDialogElement;

    dialog.showModal();
    this._location.back();
  }
}
