import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-error',
  imports: [],
  template: `
    @if (onError()) {
    <div class="alert alert-dismissible alert-danger m-2">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      ></button>
      <strong>ERROR!</strong> Ha ocurrido un error en la solicitud
      <p>
        {{ errorMessage() }}
      </p>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  onError = input.required<boolean>();
  errorMessage = input.required<string>();
}
