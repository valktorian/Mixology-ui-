import { Component, input } from '@angular/core';
import { MixBadgeVariant, MixComponentSize } from '../../config/mixology-ui.config';

@Component({
  selector: 'mix-badge',
  standalone: true,
  host: {
    '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
  },
  templateUrl: './badge.html',
  styles: [
    `
      :host {
        --mix-badge-bg: var(--surface-panel);
        --mix-badge-color: var(--text-color);
        --mix-badge-border: transparent;
        --mix-badge-padding: 0.3rem 0.75rem;
        --mix-badge-font-size: 0.85rem;
        display: inline-flex;
      }

      .mix-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.35rem;
        padding: var(--mix-badge-padding);
        border: 1px solid var(--mix-badge-border);
        border-radius: 999px;
        background: var(--mix-badge-bg);
        color: var(--mix-badge-color);
        font-size: var(--mix-badge-font-size);
        font-weight: 700;
      }

      :host([data-size='sm']) {
        --mix-badge-padding: 0.2rem 0.55rem;
        --mix-badge-font-size: 0.75rem;
      }

      :host([data-size='lg']) {
        --mix-badge-padding: 0.45rem 0.9rem;
        --mix-badge-font-size: 0.95rem;
      }

      :host([data-variant='success']) {
        --mix-badge-bg: var(--success-200);
        --mix-badge-color: var(--success-700);
        --mix-badge-border: var(--success-border);
      }

      :host([data-variant='warning']) {
        --mix-badge-bg: var(--warning-200);
        --mix-badge-color: var(--warning-700);
        --mix-badge-border: var(--warning-border);
      }

      :host([data-variant='danger']) {
        --mix-badge-bg: var(--danger-200);
        --mix-badge-color: var(--danger-700);
        --mix-badge-border: var(--danger-border);
      }
    `,
  ],
})
export class Badge {
  readonly variant = input<MixBadgeVariant>('neutral');
  readonly size = input<MixComponentSize>('md');
  readonly label = input('');
}
