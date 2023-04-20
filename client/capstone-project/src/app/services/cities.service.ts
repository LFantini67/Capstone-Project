import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from '../interfaces/restaurant.interface';
import { Review } from '../interfaces/review.interface';
import { ReviewR } from '../interfaces/review-r.interface';
import { ReviewI } from '../interfaces/review-i.interface';
import { ReviewE } from '../interfaces/review-e.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities() {
    this.http.get('http://localhost:4201/cities').subscribe((x) => {
      console.log(x)
      return x
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

  postReviewR(review: ReviewR) {
    this.http.post<ReviewR>('http://localhost:4201/reviews1', review).subscribe((x) => {
      return x
    })
  }

  postReviewI(review: ReviewI) {
    this.http.post<ReviewI>('http://localhost:4201/reviews2', review).subscribe((x) => {
      return x
    })
  }

  postReviewE(review: ReviewE) {
    this.http.post<ReviewE>('http://localhost:4201/reviews3', review).subscribe((x) => {
      return x
    })
  }

  deleteReview(review: Review) {
    this.http.delete('http://localhost:4201/reviews' + review.id)
  }

  deleteReviewR(review: ReviewR) {
    this.http.delete('http://localhost:4201/reviews1' + review.id)
  }

  deleteReviewI(review: ReviewI) {
    this.http.delete('http://localhost:4201/reviews2' + review.id)
  }

  deleteReviewE(review: ReviewE) {
    this.http.delete('http://localhost:4201/reviews3' + review.id)
  }

  putReview(review: Review, reviewUpdated: Review) {
    this.http.put('http://localhost:4201/reviews' + review.id, reviewUpdated)
  }

  putReviewR(review: ReviewR, reviewUpdated: ReviewR) {
    this.http.put('http://localhost:4201/reviews1' + review.id, reviewUpdated)
  }

  putReviewI(review: ReviewI, reviewUpdated: ReviewI) {
    this.http.put('http://localhost:4201/reviews2' + review.id, reviewUpdated)
  }

  putReviewE(review: ReviewE, reviewUpdated: ReviewE) {
    this.http.put('http://localhost:4201/reviews3' + review.id, reviewUpdated)
  }
}
