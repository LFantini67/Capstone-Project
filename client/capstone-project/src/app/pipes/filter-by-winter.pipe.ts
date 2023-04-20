import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Pipe({
  name: 'filterByWinter'
})
export class FilterByWinterPipe implements PipeTransform {

  transform(cities: City[]): City[] {
    return cities.filter(city => city.winter);
  }

}
