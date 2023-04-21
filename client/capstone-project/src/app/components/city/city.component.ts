import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/interfaces/city.interface';
import { CitiesService } from 'src/app/services/cities.service';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Interest } from 'src/app/interfaces/interest.interface';
import { Enjoy } from 'src/app/interfaces/enjoy.interface';
import { Review } from 'src/app/interfaces/review.interface';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  //ale
  cityPosted = window.location.href.split('/').pop();
  cityId = Number(this.cityPosted);

  //flavio
  city: City | undefined

  cities!: any;

  restaurants: any[] = [];
  enjoys: any[] = [];
  interests: any[] = [];

  id: number = 0;
  reviews!: any;
  mostra = false;

  voto: number = 1;
  titolo: string = "";
  testo: string = "";

  modificaReview = 0;

  account2: any;

  votoM: any;
  titoloM: any;
  testoM: any;

  review: Review = {
    id: 0,
    author: "",
    text_body: "",
    title: "",
    rating: 1,
    account_id: 0,
    city_id: 0
  }

  reviewUpdated: Review = {
    id: 0,
    author: "",
    text_body: "",
    title: "",
    rating: 1,
    account_id: 0,
    city_id: 0
  }

  constructor(private router: ActivatedRoute, private citySrv: CitiesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4201/cities').subscribe((x: any) => {
      this.cities = x;
      this.cities.forEach((c: any) => {
        if(c.id == this.cityId) {
          this.city = c;
        }
      });
      console.log(this.cities);
    });

    this.http.get('http://localhost:4201/restaurants').subscribe((x: any) => {
      x.forEach((r: any) => {
        if(r.city_id == this.cityId) {
          this.restaurants.push(r);
          console.log(this.restaurants);
        }
      })
    });

    this.http.get('http://localhost:4201/interests').subscribe((x: any) => {
      x.forEach((i: any) => {
        if(i.city_id == this.cityId) {
          this.interests.push(i);
          console.log(this.interests);
        }
      })
    });

    this.http.get('http://localhost:4201/enjoys').subscribe((x: any) => {
      x.forEach((e: any) => {
        if(e.city_id == this.cityId) {
          this.enjoys.push(e);
          console.log(this.enjoys);
        }
      })
    });

    let account1 = localStorage.getItem('user');
    if (!account1) { } else {
      this.account2 = JSON.parse(account1);
      console.log(this.account2)
    }

    this.http.get('http://localhost:4201/reviews').subscribe((y: any) => {
      this.reviews = y
      console.log(this.reviews);
    });

  }

  mostraOff() {
    this.mostra = false
  }

  provaRecensione() {
    let data = new Date();
    let data2 = data.getTime()
    console.log(data2)

    this.review = {
      id: data2,
      author: this.account2.user.name,
      text_body: this.testo,
      title: this.titolo,
      rating: this.voto,
      account_id: this.account2.user.id,
      city_id: this.cities.id
    }

    console.log(this.review)

    this.http.post<Review>('http://localhost:4201/reviews', this.review).subscribe(x => {
      console.log(x)
      this.reviews.push(this.review)
    })

    this.voto = 1;
    this.titolo = "";
    this.testo = "";

    this.id=0

  }

  deleteReview(review: Review) {
    this.http.delete("http://localhost:4201/reviews/" + review.id).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews").subscribe((x) => {
        this.reviews = x
      })
    })
    this.modificaReview = 0;
  }

  modifica(review: Review) {
    this.votoM = review.rating;
    this.titoloM = review.title;
    this.testoM = review.text_body;

    this.modificaReview = review.id;

  }

  updateReview(review: Review) {
    this.reviewUpdated.rating = this.votoM;
    this.reviewUpdated.title = this.titoloM;
    this.reviewUpdated.text_body = this.testoM;
    this.reviewUpdated.account_id = this.account2.user.id;
    this.reviewUpdated.author = this.account2.user.name;
    this.reviewUpdated.city_id = review.city_id;

    this.http.put("http://localhost:4201/reviews/" + review.id, this.reviewUpdated).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews").subscribe((x) => {
        this.reviews = x
      })
    })

    this.voto = 1;
    this.titolo = "";
    this.testo = "";

    this.votoM = 1;
    this.titoloM = "";
    this.testoM = "";

    this.modificaReview = 0;

  }

  chiudiPopUp() {
    this.modificaReview = 0;
  }

  mostraId(){
    this.id=0
  }

}
