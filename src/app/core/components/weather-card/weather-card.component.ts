import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ConvertWeatherPipe } from '../../pipes/convert-weather.pipe';
import { IClima } from '../../interfaces/IClima';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { ClimaCardMdComponent } from '../clima-card-md/clima-card-md.component';

@Component({
  selector: 'app-weather-card',
  imports: [ConvertWeatherPipe, CommonModule, ClimaCardMdComponent],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent implements OnInit {
  clima = input.required<IClima>();
  nombreCiudad = input.required<string>();
  currentTime = signal<Date>(new Date());
  ngOnInit() {
    interval(1000).subscribe(() => {
      this.currentTime.set(new Date());
    });
  }
}
