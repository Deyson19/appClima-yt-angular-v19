import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-search',
  imports: [],
  template: `
    @if(displaySpinner()){
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn btn-danger" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden" role="status">Loading...</span>
      </button>
      <button class="btn btn-danger" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  displaySpinner = input.required<boolean>();
}
