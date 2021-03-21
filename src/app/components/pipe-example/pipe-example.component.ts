// async is impure pipe

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  template: `
    <div>
      titlecase
      {{fullName | titlecase}}
    </div>

    <div>
      Percent
      <p>A: {{a | percent}}</p>
      <p>B: {{b | percent:'4.3-5'}}</p>
      <!-- <p>B: {{b | percent:'4.3-5':'In'}}</p> -->
    </div>

    <div>
      <span>
        <p>Object</p>
        <div *ngFor="let item of object | keyvalue">
          {{item.key}}:{{item.value}}
        </div>
        <p>Map</p>
        <div *ngFor="let item of map | keyvalue">
          {{item.key}}:{{item.value}}
        </div>
      </span>
    </div>
    
    <div>
      Slice: 
      <ul>
        <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
      </ul>
    </div>


    <div>
      Custom Pipe:

      <ul>
        <li *ngFor="let user of users | filterByAge">
          {{user | json}}
        </li>
      </ul>

      <button (click)="addUser()" type="submit"> Add New User</button>

    </div>

  `,
  styles: [`
    div {
      margin: 5px;
      background-color: indianred;
    }
  `]
})
export class PipeExampleComponent implements OnInit {

  fullName= 'Himanshu tamrakar';

  a: number = 0.259;
  b: number = 1.3495;

  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  collection: string[] = ['a', 'b', 'c', 'd'];

  id = 6;
  public users = [
    { "id": 1, "username": "Bret", age: 18},
    { "id": 2, "username": "Antonette", age: 25},
    { "id": 3, "username": "Samantha", age:12 },
    { "id": 4, "username": "Karianne", age: 9},
    { "id": 5,"username": "Kamren", age:  22}
  ]



  constructor() { }

  ngOnInit(): void {
  }

  addUser() {

    const obj = {
      id: this.id++, 
      username: new Date().getTime()+"", 
      age: Math.trunc(Math.random() * 36)
    }
    console.table(obj);
    // We are changing the input value of pipe so changes will be reflect.
    // this.users = [...this.users, obj]

    // We are not changing the input parameter of transform just mutating the exising array
    this.users.push(obj);
  }

}
