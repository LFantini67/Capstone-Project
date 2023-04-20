import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from 'src/app/interfaces/city.interface';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: any;

  popularArrayCity: City[] = [];
  popular: City[] = [];

  constructor(private citySrv: CitiesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4201/cities').subscribe((x: any) => {
      this.cities = x
      console.log(this.cities);
    });

    this.http.get('http://localhost:4201/cities').subscribe((b: any) => {
      this.popularArrayCity = b.sort((a: City, b: City) => {
        return b.popularity - a.popularity
      })
      for (let i = 0; i < 10; i++) {
        this.popular.push(this.popularArrayCity[i])
      }
      console.log(this.popular)
      console.log(this.popularArrayCity)
    });

  }

}








