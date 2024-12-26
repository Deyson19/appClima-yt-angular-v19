import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { IClima } from '../../interfaces/IClima';
import { ConvertWeatherPipe } from '../../pipes/convert-weather.pipe';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima-card-md',
  imports: [CommonModule, ConvertWeatherPipe],
  templateUrl: './clima-card-md.component.html',
  styles: `
  .cardMd{
     /* Royal Blue + Petrol Gradient */
background: #BBD2C5, #536976, #292E49;
background: -webkit-linear-gradient(116deg, #BBD2C5, #536976, #292E49);
background: linear-gradient(116deg, #BBD2C5, #536976, #292E49);
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimaCardMdComponent implements OnInit {
  clima = input.required<IClima>();
  nombreCiudad = input.required<string>();
  currentTime = signal<Date>(new Date());
  ngOnInit() {
    interval(1000).subscribe(() => {
      this.currentTime.set(new Date());
    });
  }
}
