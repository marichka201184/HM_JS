import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {DataTransferService} from '../../../../services/data_transfer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user: User;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  find_post(user:User): void {
    console.log(this.dataTransferService.getUser());
    this.dataTransferService.setUser(user);
    console.log(this.dataTransferService.getUser());

  }
}