import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared-navbar',
  imports: [],
  template: `
    <nav class="navbar navbar-expand-sm navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          >{{ title }}

          <i class="fa-solid fa-cloud"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  title = 'App Del Clima';
}
