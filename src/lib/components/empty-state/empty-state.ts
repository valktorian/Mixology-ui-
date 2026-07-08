import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'mix-empty-state',
  standalone: true,
  imports: [Icon],
  templateUrl: './empty-state.html',
  styles: [
    `
      :host {
        --mix-empty-state-bg: var(--surface-card);
        --mix-empty-state-border: var(--border);
        display: block;
      }

      .mix-empty-state {
        display: grid;
        justify-items: center;
        gap: 0.75rem;
        padding: 1.5rem;
        border: var(--mix-empty-state-border);
        border-radius: var(--radius-md);
        background: var(--mix-empty-state-bg);
        text-align: center;
      }

      .mix-empty-state__icon {
        color: var(--primary);
      }

      .mix-empty-state__title {
        margin: 0;
      }

      .mix-empty-state__description {
        margin: 0;
        color: var(--text-muted);
      }

      .mix-empty-state__actions {
        display: inline-flex;
        justify-content: center;
      }
    `,
  ],
})
export class EmptyState {
  readonly title = input('Nothing here yet');
  readonly description = input('');
  readonly icon = input('sparkles-solid-full');
}
