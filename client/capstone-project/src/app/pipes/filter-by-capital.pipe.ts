import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../interfaces/city.interface';

@Pipe({
  name: 'filterByCapital'
})
export class FilterByCapitalPipe implements PipeTransform {

  transform(cities: City[]): City[] {
    return cities.filter(city => city.capital);
  }

}


