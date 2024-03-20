import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-checkmark',
  standalone: true,
  imports: [],
  template: `
    <svg width="26" height="21" viewBox="0 0 26 21" fill="none">
      <path d="M1.75391 11.3329L8.50542 18.0844L24.3085 2.28128" stroke="white" stroke-width="4"/>
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCheckmarkComponent {

}
