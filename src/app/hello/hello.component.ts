import { Component, OnInit } from '@angular/core';
import {HelloService} from '../services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  helloGuest: string;
  helloUser: string;
  helloAdmin: string;
  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
  }

  sayHelloToGuest(): void {
    this.helloService.sayHelloToGuest().subscribe(helloMessage => {
      this.helloGuest = helloMessage.name;
    });
  }
  sayHelloToUser(): void {
    this.helloService.sayHelloToUser().subscribe(helloMessage => {
      this.helloUser = helloMessage.name;
    });
  }
  sayHelloToAdmin(): void {
    this.helloService.sayHelloToAdmin().subscribe(helloMessage => {
      this.helloAdmin = helloMessage.name;
    });
  }
}
