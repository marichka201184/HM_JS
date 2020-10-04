import {Component} from '@angular/core';
import {DataTransferService} from './services/data_transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_ang_app6';


  constructor(private dataService: DataTransferService) {
    console.log('default', this.dataService.getUser());
  }
}