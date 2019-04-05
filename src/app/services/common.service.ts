import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = environment.apiUrl;
  register(userName: string): Observable<any> {
    const body = {
      email: userName
    };

    return this.httpClient.post<any>(this.apiUrl + 'user/register', body).pipe(
      map(data => {
        return data;
      })
    );
  }

  getAllEmployees(): Observable<any> {
    return this.httpClient.get('d');
  }

  getTrainingList() {
    return this.httpClient.get<any>(this.apiUrl + 'doc/trainings');
  }

  public downloadTraining(file): Observable<any> {
    // Create url
    let url = this.apiUrl + 'doc/download';
    var body = { filename: file };

    let header = new HttpHeaders();
    header.append('Content-disposition', 'attachment; filename=' + file);
    header.append('Content-Transfer-Encoding', 'stream');
    header.append('Content-Type', 'base64');
    return this.httpClient.post(url, body, { headers: header, responseType: 'blob' });
  }

  public saveTrainingQuiz(payload: object): Observable<any> {
    const url = this.apiUrl + 'doc/saveTrainingQuiz';
    // const body = payload
    return this.httpClient.post(url, payload);
  }
}
