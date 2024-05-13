import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersdataService {
  constructor(private http: HttpClient) {}

  public user() {
    return this.http.get('https://emp-back-1.onrender.com/employee');
  }
  public adddata(data: any) {
    return this.http.post('https://emp-back-1.onrender.com/employee', data);
  }
  public delete(data: any) {
    return this.http.delete('https://emp-back-1.onrender.com/employee/' + data);
  }
  public edit(id: any, data: any) {
    return this.http.put<any>(
      'https://emp-back-1.onrender.com/employee/' + id,
      data
    );
  }
  public Login(data: any) {
    return this.http.post(
      'https://emp-back-1.onrender.com/employee/login',
      data
    );
  }
}
