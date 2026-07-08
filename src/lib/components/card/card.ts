import { Component, input } from '@angular/core';
import { MixCardVariant } from '../../config/mixology-ui.config';

@Component({
  selector: 'mix-card',
  standalone: true,
  host: {
    '[attr.data-variant]': 'variant()',
  },
  templateUrl: './card.html',
  styles: [
    `
      :host {
        --mix-card-padding: 24px;
        --mix-card-bg: var(--surface-card);
        --mix-card-border: var(--border);
        --mix-card-radius: var(--radius);
        --mix-card-shadow: none;
        display: block;
      }

      .mix-card {
        padding: var(--mix-card-padding);
        border-radius: var(--mix-card-radius);
        border: var(--mix-card-border);
        background: var(--mix-card-bg);
        box-shadow: var(--mix-card-shadow);
      }

      :host([data-variant='elevated']) {
        --mix-card-bg: var(--surface-solid);
        --mix-card-shadow: var(--shadow-soft);
      }

      :host([data-variant='outlined']) {
        --mix-card-bg: transparent;
        --mix-card-border: 1px solid var(--border-soft);
      }
    `,
  ],
})
export class Card {
  readonly variant = input<MixCardVariant>('default');
  readonly padding = input('24px');
}
