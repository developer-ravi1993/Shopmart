import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private url = `${environment.apiBaseUrl}/product`;

  constructor(private http: HttpClient) {}

  getMainCategory(): Observable<any> {
    return this.http.get(`${this.url}/mainCategory`);
  }
}
