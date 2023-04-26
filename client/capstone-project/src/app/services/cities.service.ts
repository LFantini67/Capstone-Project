import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../interfaces/review.interface';
import { City } from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  allCities: City[] = []
  url = 'http://localhost:4201/cities'

  constructor(private http: HttpClient) { }

  getCities() {
    this.http.get('http://localhost:4201/cities').subscribe((x) => {
      console.log(x)
      return x
    })
  }

  //flavio
  getCitiesById(id: number) {
    return this.allCities.find((c) => {
      return (c.id == id)
    })
  }

  getRestaurants() {
    this.http.get('http://localhost:4201/restaurants').subscribe((x) => {
      console.log(x)
      return x
    })
  }

  getInterests() {
    this.http.get('http://localhost:4201/interests').subscribe((x) => {
      console.log(x)
      return x
    })
  }

  getEnjoys() {
    this.http.get('http://localhost:4201/enjoys').subscribe((x) => {
      console.log(x)
      return x
    })
  }

  getReviews() {
    this.http.get('http://localhost:4201/reviews').subscribe((x) => {
      return x
    })
  }

  getReviewsR() {
    this.http.get('http://localhost:4201/reviews1').subscribe((x) => {
      return x
    })
  }

  getReviewsI() {
    this.http.get('http://localhost:4201/reviews2').subscribe((x) => {
      return x
    })
  }

  getReviewsE() {
    this.http.get('http://localhost:4201/reviews3').subscribe((x) => {
      return x
    })
  }

  postReview(review: Review) {
    this.http.post<Review>('http://localhost:4201/reviews', review).subscribe((x) => {
      return x
    })
  }

  deleteReview(review: Review) {
    this.http.delete('http://localhost:4201/reviews' + review.id)
  }

  putReview(review: Review, reviewUpdated: Review) {
    this.http.put('http://localhost:4201/reviews' + review.id, reviewUpdated)
  }

}
