import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesService } from 'src/app/services/cities.service';
import { ReviewE } from 'src/app/interfaces/review-e.interface';
import { Enjoy } from 'src/app/interfaces/enjoy.interface';

@Component({
  selector: 'app-enjoy',
  templateUrl: './enjoy.component.html',
  styleUrls: ['./enjoy.component.scss']
})
export class EnjoyComponent implements OnInit {

  @Input()
  enjoy!: Enjoy
  id: number = 0;
  reviews!: any;
  mostra = false;

  name: string = "";
  address: string = "";

  modificaReview = 0;

  account2: any;

  nameM: any;
  addressM: any;

  review: ReviewE = {
    id: 1,
    author: "",
    name: "",
    address: "",
    account_id: 1,
    enjoy_id: 1
  }

  reviewUpdated: ReviewE = {
    id: 1,
    author: "",
    name: "",
    address: "",
    account_id: 1,
    enjoy_id: 1
  }

  constructor(private citySrv: CitiesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.reviews = this.http.get("http://localhost:4201/reviews3").subscribe((x) => {
      this.reviews = x
    });

    this.id = this.enjoy.id

    let account1 = localStorage.getItem('user');
    if (!account1) { } else {
      this.account2 = JSON.parse(account1);
      console.log(this.account2)
    }

    this.http.get('http://localhost:4201/reviews3').subscribe((y: any) => {
      this.reviews = y
      console.log(this.reviews);
    });

  }

  mostraId() {
    this.id = 4
  }

  provaRecensione() {
    this.http.get("http://localhost:4201/reviews3").subscribe((x) => {
      this.reviews = x
    })

    let data = new Date();
    let data2 = data.getTime()
    console.log(data2)

    this.review = {
      id: data2,
      author: this.account2.user.name,
      name: this.name,
      address: this.address,
      account_id: this.account2.user.id,
      enjoy_id: this.enjoy.id
    }

    console.log(this.review)

    this.http.post<ReviewE>('http://localhost:4201/reviews3', this.review).subscribe(() => {
      this.http.get("http://localhost:4201/reviews3").subscribe((x) => {
        this.reviews = x
      })
    })

    this.name = "";
    this.address = "";

  }

  deleteReview(review: ReviewE) {
    this.http.delete("http://localhost:4201/reviews3/" + review.id).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews3").subscribe((x) => {
        this.reviews = x
      })
    })
    this.modificaReview = 0;
  }

  editReview(review: ReviewE) {
    this.name = review.name;
    this.address = review.address;

    this.modificaReview = review.id;

  }

  updateReview(review: ReviewE) {
    this.reviewUpdated.author = this.account2.user.name;
    this.reviewUpdated.name = this.nameM;
    this.reviewUpdated.address = this.addressM;
    this.reviewUpdated.account_id = this.account2.user.id;
    this.reviewUpdated.enjoy_id = review.enjoy_id;

    this.http.put("http://localhost:4201/reviews3/" + review.id, this.reviewUpdated).subscribe((i) => {

      console.log(this.reviews.filter((x: any) => x != i));

      return this.http.get("http://localhost:4201/reviews3").subscribe((x) => {
        this.reviews = x
      })
    })

    this.name = "";
    this.address = "";

    this.nameM = "";
    this.addressM = "";

    this.modificaReview = 0;

  }

  chiudiPopUp() {
    this.modificaReview = 0;
  }

}
