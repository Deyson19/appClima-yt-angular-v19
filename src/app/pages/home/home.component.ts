import { IClima } from './../../core/interfaces/IClima';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../core/services/clima.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorComponent, SearchComponent } from '../../shared';
import { WeatherCardComponent } from '../../core/components/weather-card/weather-card.component';
import { CommonModule } from '@angular/common';
import { IResponseWeather } from '../../core/interfaces/IResponseWeather';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    ErrorComponent,
    SearchComponent,
    WeatherCardComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly _climaService = inject(ClimaService);
  public getImage: string = 'imageClima.png';

  //*Propiedades
  public nombreCiudad!: string;
  myClima = signal<IClima | undefined>(undefined);
  showSpinner: boolean = false;
  onError: boolean = false;
  errorMessage = '';
  ngOnInit() {}

  onSubmit() {
    this.showSpinner = true;
    this._climaService.findWeather(this.nombreCiudad).subscribe({
      next: (response) => {
        if (response.cod === 200) {
          this.showSpinner = false;
          this.nombreCiudad = response.name;
          let currentWeather = response.weather[0];
          this.myClima.set({
            clima: currentWeather.main,
            temperatura: response.main.temp,
            humedad: `${response.main.humidity} %`,
            descripcion: currentWeather.description,
            temp_max: response.main.temp_max,
            temp_min: response.main.temp_min,
            feels_like: response.main.feels_like,
            pressure: response.main.pressure,
          });
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);

        if (error.status == 401) {
          this.errorMessage = 'El token no es correcto.';
        } else if (error.status == 404) {
          this.errorMessage = 'La petición no arrojó resultado.';
        } else {
          this.errorMessage = 'No se pudo realizar la solicitud.';
        }
        this.showSpinner = false;
        this.onError = true;
        setTimeout(() => {
          this.onError = false;
        }, 2500);
      },
    });
  }
}
