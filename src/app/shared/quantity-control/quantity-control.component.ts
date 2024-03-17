import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, forwardRef, model } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-quantity-control',
  standalone: true,
  imports: [
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityControlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => QuantityControlComponent),
      multi: true,
    }
  ],
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuantityControlComponent implements ControlValueAccessor, Validator {
  readonly MIN = '1';
  readonly MAX = '9';
  readonly quantity = model(this.MIN);
  onChange = (_quantity: string) => { };
  onTouched = () => { };
  onValidatorChange = () => { };
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;

  get input(): HTMLInputElement {
    return this.inputRef.nativeElement;
  }

  get isValidInput(): boolean {
    return this.input.validity.valid;
  }

  onDecrement(): void {
    if (this.isValidInput) this.input.stepDown();
    else this.input.value = this.MIN;

    this.input.dispatchEvent(new Event('input'));
  }

  onIncrement(): void {
    if (this.isValidInput) this.input.stepUp();
    else this.input.value = this.MIN;

    this.input.dispatchEvent(new Event('input'));
  }

  writeValue(quantity: string): void {
    this.quantity.set(quantity);
  }

  registerOnChange(fn: (quantity: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl<string, string>): ValidationErrors | null {
    if (control.value === '') return { required: true };

    const value = Number(control.value);

    if (window.isNaN(value)) return { nan: true };
    if (!Number.isInteger(value)) return { integer: true };
    if (value < Number(this.MIN) || value > Number(this.MAX))
      return { range: true };

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
