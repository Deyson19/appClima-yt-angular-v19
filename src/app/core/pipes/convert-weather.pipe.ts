import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appConvertWeather',
})
export class ConvertWeatherPipe implements PipeTransform {
  transform(temperature: number): string {
    //*Convert Kelvin to Celsius
    let result = Math.round(temperature - 273);
    return `${result} °C`;
  }
}
