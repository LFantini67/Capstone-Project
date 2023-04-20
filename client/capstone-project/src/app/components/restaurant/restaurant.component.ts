import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesService } from 'src/app/services/cities.service';
import { ReviewR } from 'src/app/interfaces/review-r.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant!: Restaurant;
  id: number = 0;
  reviews!: any;
  mostra = false;
  cities!: any;
  restaurants!: any;

  name: string = "";
  rating: number = 1;
  cuisine: string[] = [];
  address: string = "";

  modificaReview = 0;

  account2: any;

  nameM: any;
  ratingM: any;
  cuisineM: any;
  addressM: any;

  review: ReviewR = {
    id: 1,
    author: "",
    name: "",
    rating: 1,
    cuisine: [],
    address: "",
    account_id: 1,
    restaurant_id: 1
  }

  reviewUpdated: ReviewR = {
    id: 1,
    author: "",
    name: "",
    rating: 1,
    cuisine: [],
    address: "",
    account_id: 1,
    restaurant_id: 1
  }

  constructor(private citySrv: CitiesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.reviews = this.http.get("http://localhost:4201/reviews1").subscribe((x) => {
      this.reviews = x
    });

    this.id = this.restaurant.id

    let account1 = localStorage.getItem('user');
    if (!account1) { } else {
      this.account2 = JSON.parse(account1);
      console.log(this.account2)
    }

    this.http.get('http://localhost:4201/reviews1').subscribe((y: any) => {
      this.reviews = y
      console.log(this.reviews);
    });

  }

  mostraId() {
    this.id = 4
  }

  provaRecensione() {
    this.http.get("http://localhost:4201/reviews1").subscribe((x) => {
      this.reviews = x
    })

    let data = new Date();
    let data2 = data.getTime()
    console.log(data2)

    this.review = {
      id: data2,
      author: this.account2.user.name,
      name: this.name,
      rating: this.rating,
      cuisine: [],
      address: this.address,
      account_id: this.account2.user.id,
      restaurant_id: this.restaurant.id
    }

    console.log(this.review)

    this.http.post<ReviewR>('http://localhost:4201/reviews1', this.review).subscribe(() => {
      this.http.get("http://localhost:4201/reviews1").subscribe((x) => {
        this.reviews = x
      })
    })

    this.name = "";
    this.rating = 1;
    this.cuisine = [];
    this.address = "";

  }

  deleteReview(review: ReviewR) {
    this.http.delete("http://localhost:4201/reviews1/" + review.id).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews1").subscribe((x) => {
        this.reviews = x
      })
    })
    this.modificaReview = 0;
  }

  editReview(review: ReviewR) {
    this.name = review.name;
    this.rating = review.rating;
    this.cuisine = [];
    this.address = review.address;

    this.modificaReview = review.id;

  }

  updateReview(review: ReviewR) {
    this.reviewUpdated.author = this.account2.user.name;
    this.reviewUpdated.name = this.nameM;
    this.reviewUpdated.rating = this.ratingM;
    this.reviewUpdated.cuisine = [];
    this.reviewUpdated.address = this.addressM;
    this.reviewUpdated.account_id = this.account2.user.id;
    this.reviewUpdated.restaurant_id = review.restaurant_id;

    this.http.put("http://localhost:4201/reviews1/" + review.id, this.reviewUpdated).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews1").subscribe((x) => {
        this.reviews = x
      })
    })

    this.name = "";
    this.rating = 1;
    this.cuisine = [];
    this.address = "";

    this.nameM = "";
    this.ratingM = 1;
    this.cuisineM = [];
    this.addressM = "";

    this.modificaReview = 0;

  }

  chiudiPopUp(){
    this.modificaReview = 0;
  }

}


