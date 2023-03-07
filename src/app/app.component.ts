import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-web-ui';


  constructor(private httpService: HttpService) { }

  ngOnInit() {

    // curl - X 'GET' \
    // 'http://localhost:8001/api/pokemon/1' \
    // -H 'accept: application/json'

    // get a random number between 1 and 890
    let random = Math.floor(Math.random() * 890) + 1;


    let endpoint = environment.api_host + '/' + environment.api_root + '/pokemon/' + random;

    console.log('url: ' + endpoint);

    this.httpService.get(endpoint).subscribe((data) => {
      console.log(data);
    });
  }

}
