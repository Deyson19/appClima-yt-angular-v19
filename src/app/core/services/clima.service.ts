import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { IResponseWeather } from '../interfaces/IResponseWeather';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private readonly _http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;
  private readonly apiKey = environment.apiKey;

  findWeather(city: string): Observable<IResponseWeather> {
    const url = this.baseUrl + `?q=${city}&appid=${this.apiKey}&lang=es`;

    return this._http.get<IResponseWeather>(url);
  }
}
