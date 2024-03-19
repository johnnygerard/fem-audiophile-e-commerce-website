import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CashOnDeliveryComponent } from '../../../svg/cash-on-delivery/cash-on-delivery.component';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule,
    CashOnDeliveryComponent,
  ],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFormComponent {
  readonly E_MONEY = 'e-money';
  readonly CASH_ON_DELIVERY = 'cash-on-delivery';
  readonly PIN_REGEX = '[0-9]{4}';
  readonly checkoutForm = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    phone: '',
    address: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    paymentMethod: ['', Validators.required],
    eMoneyNumber: ['', Validators.required],
    eMoneyPin: ['', [
      Validators.required,
      Validators.pattern(this.PIN_REGEX),
    ]],
  });

  constructor(private readonly _formBuilder: FormBuilder) { }
}
