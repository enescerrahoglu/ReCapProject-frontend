import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDtoResponseModel } from '../models/rentalDtoResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44329/api/rentals/getall";
  apiUrldto='https://localhost:44329/api/rentals/getdetail';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }

  getRentalDetails():Observable<RentalDtoResponseModel>{
    return this.httpClient.get<RentalDtoResponseModel>(this.apiUrldto);
  }
}